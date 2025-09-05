import * as antlr4 from 'antlr4';

export class QueryErrorListener extends antlr4.ErrorListener<any> {
    private errors: string[] = [];

    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, e: any) {
        const errorMsg = `Line ${line}:${column} - ${msg}`;
        this.errors.push(errorMsg);
    }

    reportAmbiguity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: any, configs: any) {
        // Handle ambiguity errors if needed
    }

    reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any) {
        // Handle full context attempts if needed
    }

    reportContextSensitivity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, prediction: number, configs: any) {
        // Handle context sensitivity if needed
    }

    getErrors(): string[] {
        return this.errors;
    }

    hasErrors(): boolean {
        return this.errors.length > 0;
    }

    clear(): void {
        this.errors = [];
    }
}