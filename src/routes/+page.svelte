<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";

    let inputElement;
    let query: string = $state("");

    let error: string | null = $state(null);


    let issues: any[] = $state([]);

    function onsearch() {
        fetch(`/api/issues?query=${query}`).then(async (response) => {
            if (response.ok) {
                issues = await response.json();
                console.log(issues);
            }
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
                        type="text"
                        placeholder="Type your query "
                        class="flex-1"
                    />
                    <Button onclick={onsearch}>Search</Button>
                </div>

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
