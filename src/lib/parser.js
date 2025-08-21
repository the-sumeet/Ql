import antlr4 from 'antlr4';
import QlLexer from '../../generated/QlLexer.js';
import QlParser from '../../generated/QlParser.js';

export class QlAutoCompleter {
  constructor() {
    this.keywords = [
      'AND', 'OR', 'NOT', 'IN', 'CONTAINS', 'IS', 'EMPTY', 
      'WAS', 'CHANGED', 'true', 'false', 'null'
    ];
    
    this.operators = ['=', '!=', '<>', '<', '<=', '>', '>='];
    
    this.commonFields = [
      'assignee', 'reporter', 'status', 'priority', 'project',
      'component', 'version', 'fixVersion', 'labels', 'summary',
      'description', 'created', 'updated', 'resolved', 'type'
    ];
    
    this.functions = ['now()', 'currentUser()', 'startOfDay()', 'endOfDay()'];
  }

  getSuggestions(input, cursorPosition) {
    try {
      const beforeCursor = input.substring(0, cursorPosition);
      const afterCursor = input.substring(cursorPosition);
      
      // Parse the input up to cursor position
      const chars = new antlr4.InputStream(beforeCursor);
      const lexer = new QlLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      
      // Get the last token
      tokens.fill();
      const allTokens = tokens.getTokens();
      const lastToken = allTokens[allTokens.length - 1];
      
      // Determine context and provide suggestions
      return this.getContextualSuggestions(beforeCursor, lastToken);
    } catch (error) {
      // If parsing fails, provide basic suggestions
      return this.getBasicSuggestions(input.substring(0, cursorPosition));
    }
  }

  getContextualSuggestions(beforeCursor, lastToken) {
    const suggestions = [];
    const trimmed = beforeCursor.trim();
    
    // If empty or just whitespace
    if (!trimmed) {
      return this.commonFields.map(field => ({ 
        text: field, 
        type: 'field',
        description: `Field: ${field}`
      }));
    }
    
    // Check if we're expecting an operator
    if (this.isExpectingOperator(trimmed)) {
      return this.operators.map(op => ({
        text: op,
        type: 'operator',
        description: `Operator: ${op}`
      }));
    }
    
    // Check if we're expecting a value
    if (this.isExpectingValue(trimmed)) {
      const valueSuggestions = [
        ...this.functions.map(func => ({
          text: func,
          type: 'function',
          description: `Function: ${func}`
        })),
        { text: '"', type: 'quote', description: 'String value' },
        { text: 'true', type: 'boolean', description: 'Boolean: true' },
        { text: 'false', type: 'boolean', description: 'Boolean: false' },
        { text: 'null', type: 'null', description: 'Null value' }
      ];
      
      return valueSuggestions;
    }
    
    // Check if we need logical operators
    if (this.canAddLogicalOperator(trimmed)) {
      const logicalOps = [
        { text: 'AND', type: 'logical', description: 'Logical AND' },
        { text: 'OR', type: 'logical', description: 'Logical OR' }
      ];
      return logicalOps;
    }
    
    // Default: suggest fields and keywords
    const allSuggestions = [
      ...this.commonFields.map(field => ({
        text: field,
        type: 'field',
        description: `Field: ${field}`
      })),
      ...this.keywords.map(kw => ({
        text: kw,
        type: 'keyword',
        description: `Keyword: ${kw}`
      }))
    ];
    
    // Filter based on current partial input
    const lastWord = this.getLastWord(beforeCursor);
    if (lastWord) {
      return allSuggestions.filter(s => 
        s.text.toLowerCase().startsWith(lastWord.toLowerCase())
      );
    }
    
    return allSuggestions;
  }

  isExpectingOperator(text) {
    // Simple heuristic: if last non-whitespace token looks like a field
    const tokens = text.trim().split(/\s+/);
    const lastToken = tokens[tokens.length - 1];
    
    // Check if it's a valid field pattern
    return /^[a-zA-Z_][a-zA-Z0-9_.]*$/.test(lastToken) && 
           !this.keywords.includes(lastToken.toUpperCase());
  }

  isExpectingValue(text) {
    // Check if text ends with an operator
    const operators = ['=', '!=', '<>', '<', '<=', '>', '>=', 'CONTAINS', 'IN'];
    return operators.some(op => 
      text.trim().toLowerCase().endsWith(op.toLowerCase())
    );
  }

  canAddLogicalOperator(text) {
    // Simplified check: if we have a complete condition
    try {
      const chars = new antlr4.InputStream(text + ' ');
      const lexer = new QlLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new QlParser(tokens);
      
      // Try to parse as expression - if successful, we can add logical operators
      parser.expression();
      return true;
    } catch (error) {
      return false;
    }
  }

  getLastWord(text) {
    const match = text.match(/\b(\w+)$/);
    return match ? match[1] : '';
  }

  getBasicSuggestions(partialInput) {
    const lastWord = this.getLastWord(partialInput);
    if (!lastWord) {
      return this.commonFields.map(field => ({
        text: field,
        type: 'field',
        description: `Field: ${field}`
      }));
    }
    
    const allItems = [
      ...this.commonFields,
      ...this.keywords,
      ...this.operators,
      ...this.functions
    ];
    
    return allItems
      .filter(item => item.toLowerCase().startsWith(lastWord.toLowerCase()))
      .map(item => ({
        text: item,
        type: 'suggestion',
        description: item
      }));
  }

  validateQuery(query) {
    try {
      const chars = new antlr4.InputStream(query);
      const lexer = new QlLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new QlParser(tokens);
      
      parser.query();
      return { valid: true, errors: [] };
    } catch (error) {
      return { 
        valid: false, 
        errors: [error.message] 
      };
    }
  }
}