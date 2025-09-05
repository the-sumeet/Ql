<script lang="ts">
    import { Button } from "$lib/Components/ui/button/index.js";
    import { Input } from "$lib/Components/ui/input/index.js";
    import * as Card from "$lib/Components/ui/card/index.js";
    import { QlAutoCompleter } from "$lib/generator/query_suggestions";
    let inputElement;
    let query: string = $state("");
    $effect(() => {
        const suggestions = qlAutoCompleter.getSuggestions(query, query.length);
        console.log(suggestions);
    });
    let error: string | null = $state(null);

    let qlAutoCompleter = new QlAutoCompleter();

    function onsearch() {
        fetch(`/api/issues?query=${query}`).then(async (response) => {
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            }
        });
    }
</script>

<div class="flex flex-col h-screen items-center p-4">
    <div class="flex flex-col w-full max-w-2xl">
        <div class="flex w-full items-center space-x-2 mb-4">
            <Input
                bind:this={inputElement}
                bind:value={query}
                type="text"
                placeholder="Type your query "
                class="flex-1"
            />
            <Button onclick={onsearch}>Search</Button>
        </div>
    </div>
</div>
