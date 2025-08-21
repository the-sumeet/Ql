<script>
  import QueryInput from './lib/QueryInput.svelte';
  
  let currentQuery = '';
  let queryHistory = [];
  
  function handleQueryInput(event) {
    currentQuery = event.detail.query;
  }
  
  function executeQuery() {
    if (currentQuery.trim() && !queryHistory.includes(currentQuery)) {
      queryHistory = [currentQuery, ...queryHistory.slice(0, 9)]; // Keep last 10
    }
    console.log('Executing query:', currentQuery);
    // Here you would typically send the query to your backend
  }
  
  function loadHistoryQuery(query) {
    currentQuery = query;
  }
  
  function clearQuery() {
    currentQuery = '';
  }
  
  const exampleQueries = [
    'assignee = currentUser() AND status != "Done"',
    'project = "MYPROJECT" AND priority in ("High", "Critical")',
    'created >= "2024-01-01" AND labels contains "bug"',
    'status was "In Progress" AND assignee changed',
    'description contains "performance" OR summary contains "slow"'
  ];
</script>

<main class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">
        JQL Query Builder
      </h1>
      <p class="text-lg text-gray-600">
        Build and test JIRA Query Language expressions with autocomplete
      </p>
    </header>
    
    <!-- Input -->
    <div class="mb-8 ">
      <QueryInput
        bind:query={currentQuery}
        on:input={handleQueryInput}
        placeholder="Type your JQL query here..."
      />
      
      <div class="flex justify-center mt-4 space-x-4">
        <button
          on:click={executeQuery}
          disabled={!currentQuery.trim()}
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors
                 font-medium"
        >
          Execute Query
        </button>
        
        <button
          on:click={clearQuery}
          class="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 
                 transition-colors font-medium"
        >
          Clear
        </button>
      </div>
    </div>
    
    <!-- Example Queries -->
     
    <div class="max-w-4xl mx-auto mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Example Queries</h2>
      <div class="grid gap-3">
        {#each exampleQueries as example}
          <div class="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <code class="text-sm font-mono text-gray-800 block mb-2">
              {example}
            </code>
            <button
              on:click={() => loadHistoryQuery(example)}
              class="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Use this query
            </button>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Query History -->
    {#if queryHistory.length > 0}
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Recent Queries</h2>
        <div class="bg-white rounded-lg border border-gray-200">
          {#each queryHistory as query, index}
            <div class="p-4 border-b border-gray-100 last:border-b-0 flex justify-between items-center">
              <code class="text-sm font-mono text-gray-800 flex-1 mr-4">
                {query}
              </code>
              <button
                on:click={() => loadHistoryQuery(query)}
                class="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap"
              >
                Load
              </button>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Help Section -->
    <div class="max-w-4xl mx-auto mt-12 bg-blue-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-blue-900 mb-3">Quick Help</h3>
      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 class="font-medium text-blue-800 mb-2">Fields</h4>
          <ul class="text-blue-700 space-y-1">
            <li><code>assignee</code>, <code>reporter</code>, <code>status</code></li>
            <li><code>priority</code>, <code>project</code>, <code>component</code></li>
            <li><code>created</code>, <code>updated</code>, <code>resolved</code></li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-blue-800 mb-2">Operators</h4>
          <ul class="text-blue-700 space-y-1">
            <li><code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code></li>
            <li><code>IN</code>, <code>CONTAINS</code>, <code>IS EMPTY</code></li>
            <li><code>AND</code>, <code>OR</code>, <code>NOT</code></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>