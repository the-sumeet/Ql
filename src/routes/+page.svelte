<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";

    let inputElement: SvelteComponent;
    let query: string = $state("");

    let error: string | null = $state(null);


    let issues: any[] = $state([]);

    // Suggestions state
    let suggestions: string[] = $state([]);
    let showSuggestions: boolean = $state(false);
    let loadingSuggest: boolean = $state(false);
    let suggestError: string | null = $state(null);
    let debounceId: any = null;


    function onsearch() {
        fetch(`/api/issues?query=${query}`).then(async (response) => {
            if (response.ok) {
                issues = await response.json();
                console.log(issues);
            }
        });
    }

    function onInput() {
        // Debounce suggestion updates for better UX
        if (debounceId) clearTimeout(debounceId);
        debounceId = setTimeout(updateSuggestions, 150);
    }

    import { analyzeSuggestContext } from '$lib/suggest';
    import type { SvelteComponent } from "svelte";

    async function updateSuggestions() {
        suggestError = null;
        const caret = inputElement?.selectionStart ?? query.length;
        const ctx = analyzeSuggestContext(query, caret);

        // If not in a good context, hide suggestions
        if (ctx.mode === 'none') {
            suggestions = [];
            showSuggestions = false;
            return;
        }

        if (ctx.mode === 'value' && ctx.field) {
            loadingSuggest = true;
            showSuggestions = true;
            try {
                const params = new URLSearchParams({ field: ctx.field, limit: '15' });
                const res = await fetch(`/api/suggest?${params.toString()}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch suggestions');
                }
                const data: string[] = await res.json();
                suggestions = data || [];
            } catch (e: any) {
                suggestError = e?.message || 'Suggestion error';
                suggestions = [];
            } finally {
                loadingSuggest = false;
            }
        }
    }

    function applySuggestion(s: string) {
        const caret = inputElement?.selectionStart ?? query.length;
        const ctx = analyzeSuggestContext(query, caret);
        if (ctx.mode === 'value') {
            // Insert quoted string by default; user can adjust for non-strings
            const needsParen = /\b(?:in|not\s+in)\s*$/.test(query.toLowerCase());
            if (needsParen) {
                // Add opening paren if missing
                if (!/\(\s*$/.test(query)) {
                    query = query + ' ("' + s.replaceAll('"', '\\"') + '")';
                } else {
                    // In a list: add with comma if needed
                    query = query.replace(/\s*\)\s*$/, 
                        (m) => (/(\(\s*)$/.test(query) ? '"' + s.replaceAll('"', '\\"') + '"' : ', "' + s.replaceAll('"', '\\"') + '"') + ')'
                    );
                }
            } else {
                // Simple value after operator/contains
                // If there's already an opening quote started, just complete the token; else insert quoted
                if (/['\"]\s*$/.test(query)) {
                    query = query + s.replaceAll('"', '\\"') + '"';
                } else {
                    query = query + ' "' + s.replaceAll('"', '\\"') + '"';
                }
            }
        }
        // Hide suggestions after applying
        suggestions = [];
        showSuggestions = false;
        // Refocus input for continued typing
        queueMicrotask(() => {
            if (inputElement && inputElement.focus) inputElement.focus();
        });
    }
</script>

<div class="flex flex-col h-screen items-center p-4 w-full">
    <Card.Root class="w-full max-w-4xl">
        <!-- <Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
        </Card.Header> -->
        <Card.Content class="">
            <div class="flex flex-col w-full max-w-8xl">
                <div class="flex w-full items-center space-x-2 mb-4">
                    <Input
                        bind:this={inputElement}
                        bind:value={query}
                        oninput={onInput}
                        onfocus={() => updateSuggestions()}
                        onblur={() => setTimeout(() => (showSuggestions = false), 120)}
                        type="text"
                        placeholder="Type your query "
                        class="flex-1"
                    />
                    <Button onclick={onsearch}>Search</Button>
                </div>

                {#if showSuggestions}
                    <div class="relative">
                        <ul class="absolute z-10 mt-[-0.5rem] w-full max-w-4xl bg-white border rounded-md shadow divide-y">
                            {#if loadingSuggest}
                                <li class="p-2 text-sm text-gray-500">Loading…</li>
                            {:else if suggestError}
                                <li class="p-2 text-sm text-red-600">{suggestError}</li>
                            {:else if suggestions.length === 0}
                                <li class="p-2 text-sm text-gray-500">No suggestions</li>
                            {:else}
                                {#each suggestions as s}
                                    <li class="p-2 cursor-pointer hover:bg-gray-100" on:mousedown|preventDefault={() => applySuggestion(s)}>
                                        {s}
                                    </li>
                                {/each}
                            {/if}
                        </ul>
                    </div>
                {/if}

                {#if issues && issues.length > 0}
                    <Table.Root>
                        <!-- <Table.Caption
                        >A list of your recent invoices.</Table.Caption
                    > -->
                        <Table.Header>
                            <Table.Row>
                                <Table.Head class="">Title</Table.Head>
                                <Table.Head>Status</Table.Head>
                                <Table.Head>Description</Table.Head>
                                <Table.Head class="text-right"
                                    >Prioritys</Table.Head
                                >
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {#each issues as issue}
                                <Table.Row>
                                    <Table.Cell class="font-medium"
                                        >{issue.title}</Table.Cell
                                    >
                                    <Table.Cell
                                        ><Badge variant="secondary"
                                            >{issue.status}</Badge
                                        ></Table.Cell
                                    >
                                    <Table.Cell>{issue.description}</Table.Cell>
                                    <Table.Cell class="text-right"
                                        >{issue.priority}</Table.Cell
                                    >
                                </Table.Row>
                            {/each}
                        </Table.Body>
                    </Table.Root>
                {/if}
            </div>
        </Card.Content>
        <!-- <Card.Footer>
            <p>Card Footer</p>
        </Card.Footer> -->
    </Card.Root>
</div>
