import { InputStream, CommonTokenStream } from 'antlr4';
import QlLexer from '$lib/QlLexer';

export type SuggestContext = {
  mode: 'value' | 'none';
  field?: string;
};

function tokenizeUpTo(input: string, caret: number) {
  const slice = input.slice(0, Math.max(0, Math.min(caret, input.length)));
  const lexer = new QlLexer(new InputStream(slice));
  const tokens = new CommonTokenStream(lexer);
  tokens.fill();
  // Filter out hidden tokens and EOF
  const items = (tokens as any).tokens as any[];
  return items.filter((t) => t.type !== QlLexer.WS && t.type !== QlLexer.LINE_COMMENT && t.type !== QlLexer.BLOCK_COMMENT && t.type !== QlLexer.EOF);
}

function isOperatorExpectingValue(type: number): boolean {
  return (
    type === QlLexer.EQ ||
    type === QlLexer.NE ||
    type === QlLexer.LT ||
    type === QlLexer.LE ||
    type === QlLexer.GT ||
    type === QlLexer.GE ||
    type === QlLexer.CONTAINS ||
    type === QlLexer.NOT_CONTAINS
  );
}

function readFieldBackward(tokens: any[], idxBefore: number): string | undefined {
  // Expect IDENTIFIER (DOT IDENTIFIER)* ending at idxBefore
  let i = idxBefore;
  if (i < 0 || tokens[i].type !== QlLexer.IDENTIFIER) return undefined;
  const parts: string[] = [tokens[i].text];
  i--;
  while (i >= 1) {
    if (tokens[i].type === QlLexer.DOT && tokens[i - 1].type === QlLexer.IDENTIFIER) {
      parts.unshift(tokens[i - 1].text);
      i -= 2;
      continue;
    }
    break;
  }
  return parts.join('.');
}

export function analyzeSuggestContext(input: string, caret: number): SuggestContext {
  const tokens = tokenizeUpTo(input, caret);
  if (tokens.length === 0) return { mode: 'none' };

  const lastIdx = tokens.length - 1;
  const last = tokens[lastIdx];

  // Case 1: directly after operator expecting a value
  if (isOperatorExpectingValue(last.type)) {
    const field = readFieldBackward(tokens, lastIdx - 1);
    if (field) return { mode: 'value', field };
  }

  // Case 2: after IN / NOT_IN (with optional LPAREN or after COMMA in list)
  // Find nearest IN/NOT_IN to the left
  let inIndex = -1;
  for (let i = lastIdx; i >= 0; i--) {
    if (tokens[i].type === QlLexer.IN || tokens[i].type === QlLexer.NOT_IN) {
      inIndex = i;
      break;
    }
    // Stop if we hit an AND/OR or another high-level separator which means we're in a different condition
    if (tokens[i].type === QlLexer.AND || tokens[i].type === QlLexer.OR) break;
  }

  if (inIndex !== -1) {
    // Ensure we haven't closed the list with a RPAREN already after IN
    let closed = false;
    for (let j = inIndex + 1; j <= lastIdx; j++) {
      if (tokens[j].type === QlLexer.RPAREN) {
        closed = true;
        break;
      }
    }
    if (!closed) {
      // Expect value if last token is IN/NOT_IN, LPAREN, COMMA, or even partial value token
      const t = last.type;
      if (t === QlLexer.IN || t === QlLexer.NOT_IN || t === QlLexer.LPAREN || t === QlLexer.COMMA || t === QlLexer.IDENTIFIER || t === QlLexer.STRING || t === QlLexer.NUMBER || t === QlLexer.BOOLEAN || t === QlLexer.NULL || t === QlLexer.DATE) {
        const field = readFieldBackward(tokens, inIndex - 1);
        if (field) return { mode: 'value', field };
      }
    }
  }

  // Case 3: after comparison operator but user has started typing a value token (IDENTIFIER/STRING/etc.)
  for (let i = lastIdx; i >= 1; i--) {
    if (isOperatorExpectingValue(tokens[i - 1].type)) {
      const field = readFieldBackward(tokens, i - 2);
      if (field) return { mode: 'value', field };
      break;
    }
  }

  return { mode: 'none' };
}

