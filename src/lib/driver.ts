import { InputStream, CommonTokenStream } from 'antlr4';
import QlLexer from './QlLexer';
import QlParser from './QlParser';
import QueryToPrismaGenerator from '$lib/generator/prisma';
import { QueryErrorListener } from './generator/errorListener';

export function parseQuery(queryString: string) {
    const inputStream = new InputStream(queryString);
    const lexer = new QlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new QlParser(tokenStream);

    // Create and add custom error listener
    const errorListener = new QueryErrorListener();
    parser.removeErrorListeners(); // Remove default console error listener
    parser.addErrorListener(errorListener);
    lexer.removeErrorListeners(); // Remove default console error listener
    lexer.addErrorListener(errorListener);

    const parseTree = parser.query();

    // Check for parsing errors
    if (errorListener.hasErrors()) {
        throw new Error(errorListener.getErrors().join('\n'));
    }

    const generator = new QueryToPrismaGenerator();
    const prismaQuery = generator.visitQuery(parseTree);

    return prismaQuery;
}

function runExamples() {
    const examples = [
        'name = "John"',
        'age > 25',
        'name = "John" AND age > 25',
        'status = "active" OR status = "pending"',
        'NOT deleted = true',
        'status IN ("active", "pending", "review")',
        'role NOT IN ("admin", "super_admin")',
        'email CONTAINS "@gmail.com"',
        'description NOT CONTAINS "deprecated"',
        'notes IS EMPTY',
        'profile IS NOT EMPTY',
        '(name = "John" OR name = "Jane") AND age > 18',
        'created_date > "2023-01-01"',
        'deleted_at = NULL',
        'user.profile.status = "complete"'
    ];

    console.log('=== Query Language to Prisma Generator ===\n');

    examples.forEach((query, index) => {
        console.log(`Example ${index + 1}: ${query}`);
        const result = parseQuery(query);
        if (result) {
            console.log('Prisma Query:', JSON.stringify(result, null, 2));
        } else {
            console.log('Failed to parse query');
        }
        console.log('---\n');
    });
}

runExamples();