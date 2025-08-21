<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { QlAutoCompleter } from './parser.js';
  
  export let query = '';
  export let placeholder = 'Enter JQL query...';
  
  let inputElement;
  let suggestions = [];
  let showSuggestions = false;
  let selectedSuggestionIndex = -1;
  let autoCompleter;
  
  const dispatch = createEventDispatcher();
  
  onMount(() => {
    autoCompleter = new QlAutoCompleter();
  });
  
  function handleInput(event) {
    const value = event.target.value;
    const cursorPosition = event.target.selectionStart;
    
    query = value;
    updateSuggestions(value, cursorPosition);
    dispatch('input', { query: value });
  }
  
  function updateSuggestions(inputValue, cursorPosition) {
    if (!autoCompleter) return;
    
    const newSuggestions = autoCompleter.getSuggestions(inputValue, cursorPosition);
    suggestions = newSuggestions.slice(0, 10); // Limit to 10 suggestions
    showSuggestions = suggestions.length > 0;
    selectedSuggestionIndex = -1;
  }
  
  function handleKeyDown(event) {
    if (!showSuggestions) return;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        selectedSuggestionIndex = Math.min(
          selectedSuggestionIndex + 1,
          suggestions.length - 1
        );
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
        break;
        
      case 'Enter':
      case 'Tab':
        event.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          applySuggestion(suggestions[selectedSuggestionIndex]);
        }
        break;
        
      case 'Escape':
        showSuggestions = false;
        selectedSuggestionIndex = -1;
        break;
    }
  }
  
  function applySuggestion(suggestion) {
    const cursorPosition = inputElement.selectionStart;
    const beforeCursor = query.substring(0, cursorPosition);
    const afterCursor = query.substring(cursorPosition);
    
    // Find the start of the current word
    const lastWordMatch = beforeCursor.match(/\b(\w*)$/);
    const wordStart = lastWordMatch ? 
      cursorPosition - lastWordMatch[1].length : cursorPosition;
    
    // Replace the current word with the suggestion
    const newValue = query.substring(0, wordStart) + 
      suggestion.text + 
      (suggestion.type === 'quote' ? '' : ' ') +
      afterCursor;
    
    query = newValue;
    showSuggestions = false;
    selectedSuggestionIndex = -1;
    
    // Set cursor position after the inserted text
    setTimeout(() => {
      const newCursorPos = wordStart + suggestion.text.length + 
        (suggestion.type === 'quote' ? 0 : 1);
      inputElement.setSelectionRange(newCursorPos, newCursorPos);
      inputElement.focus();
    });
    
    dispatch('input', { query });
  }
  
  function handleSuggestionClick(suggestion) {
    applySuggestion(suggestion);
  }
  
  function handleFocus() {
    if (query) {
      updateSuggestions(query, inputElement.selectionStart);
    }
  }
  
  function handleBlur() {
    // Delay hiding suggestions to allow clicks
    setTimeout(() => {
      showSuggestions = false;
    }, 200);
  }
  
  function getSuggestionIcon(type) {
    switch (type) {
      case 'field': return '🏷️';
      case 'operator': return '⚖️';
      case 'keyword': return '🔤';
      case 'function': return '⚙️';
      case 'logical': return '🔗';
      case 'boolean': return '✅';
      case 'quote': return '💬';
      default: return '💡';
    }
  }
</script>

<div class="relative w-full max-w-4xl mx-auto">
  <div class="relative">
    <input
      bind:this={inputElement}
      bind:value={query}
      on:input={handleInput}
      on:keydown={handleKeyDown}
      on:focus={handleFocus}
      on:blur={handleBlur}
      {placeholder}
      class="w-full px-4 py-3 text-lg font-mono border-2 border-gray-300 rounded-lg 
             focus:border-blue-500 focus:outline-none transition-colors
             bg-white text-gray-900 placeholder-gray-500 rounded-xl border-2 bg-red-800"
      autocomplete="off"
      spellcheck="false"
    />
    
    {#if showSuggestions}
      <div class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
        {#each suggestions as suggestion, index}
          <div
            class="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-b-0
                   {index === selectedSuggestionIndex ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-900'}"
            on:click={() => handleSuggestionClick(suggestion)}
          >
            <span class="mr-2 text-sm">
              {getSuggestionIcon(suggestion.type)}
            </span>
            <div class="flex-1">
              <div class="font-mono font-medium">
                {suggestion.text}
              </div>
              {#if suggestion.description}
                <div class="text-sm opacity-75">
                  {suggestion.description}
                </div>
              {/if}
            </div>
            <div class="ml-2 px-2 py-1 text-xs rounded 
                        {index === selectedSuggestionIndex ? 'bg-blue-600' : 'bg-gray-200 text-gray-600'}">
              {suggestion.type}
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <!-- Query validation feedback -->
  {#if query && autoCompleter}
    {#await autoCompleter.validateQuery(query) then validation}
      <div class="mt-2 text-sm">
        {#if validation.valid}
          <span class="text-green-600 flex items-center">
            <span class="mr-1">✅</span>
            Valid query
          </span>
        {:else}
          <span class="text-red-600 flex items-center">
            <span class="mr-1">❌</span>
            Invalid query
          </span>
          {#each validation.errors as error}
            <div class="text-red-500 text-xs mt-1 ml-4">
              {error}
            </div>
          {/each}
        {/if}
      </div>
    {/await}
  {/if}
</div>