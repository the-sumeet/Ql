grammar Ql;

// Parser rules
query
    : expression EOF
    ;

expression
    : expression AND expression     # andExpression
    | expression OR expression      # orExpression
    | NOT expression               # notExpression
    | LPAREN expression RPAREN     # parenthesizedExpression
    | condition                    # atomicExpression
    ;

condition
    : field operator value         # comparisonCondition
    | field IN LPAREN valueList RPAREN  # inCondition
    | field NOT_IN LPAREN valueList RPAREN  # notInCondition
    | field CONTAINS value         # containsCondition
    | field NOT_CONTAINS value     # notContainsCondition
    | field IS EMPTY               # isEmptyCondition
    | field IS NOT EMPTY           # isNotEmptyCondition
/*    | field WAS value              # wasCondition
    | field CHANGED                # changedCondition */
    ;

operator
    : EQ | NE | LT | LE | GT | GE
    ;

valueList
    : value (COMMA value)* ?
    ;

value
    : STRING                       # stringValue
    | NUMBER                       # numberValue
    | BOOLEAN                      # booleanValue
    | DATE                         # dateValue
    | NULL                         # nullValue
    | function                     # functionValue
    ;

function
    : IDENTIFIER LPAREN (value (COMMA value)*)? RPAREN
    ;

field
    : IDENTIFIER (DOT IDENTIFIER)*
    ;

// Lexer rules
// Operators
EQ          : '=' ;
NE          : '!=' | '<>' ;
LT          : '<' ;
LE          : '<=' ;
GT          : '>' ;
GE          : '>=' ;

// Keywords
AND         : [Aa][Nn][Dd] ;
OR          : [Oo][Rr] ;
NOT         : [Nn][Oo][Tt] ;
IN          : [Ii][Nn] ;
NOT_IN      : [Nn][Oo][Tt] WS+ [Ii][Nn] ;
CONTAINS    : [Cc][Oo][Nn][Tt][Aa][Ii][Nn][Ss] ;
NOT_CONTAINS: [Nn][Oo][Tt] WS+ [Cc][Oo][Nn][Tt][Aa][Ii][Nn][Ss] ;
IS          : [Ii][Ss] ;
EMPTY       : [Ee][Mm][Pp][Tt][Yy] ;
WAS         : [Ww][Aa][Ss] ;
CHANGED     : [Cc][Hh][Aa][Nn][Gg][Ee][Dd] ;

// Literals
STRING      : '"' (~["\r\n] | '""')* '"'
            | '\'' (~['\r\n] | '\'\'')* '\''
            ;
NUMBER      : '-'? [0-9]+ ('.' [0-9]+)? ;
BOOLEAN     : [Tt][Rr][Uu][Ee] | [Ff][Aa][Ll][Ss][Ee] ;
DATE        : [0-9]{4} '-' [0-9]{2} '-' [0-9]{2}
            | [0-9]{4} '/' [0-9]{2} '/' [0-9]{2}
            | [0-9]{2} '/' [0-9]{2} '/' [0-9]{4}
            ;
NULL        : [Nn][Uu][Ll][Ll] ;

// Identifiers
IDENTIFIER  : [a-zA-Z_] [a-zA-Z0-9_]* ;

// Punctuation
LPAREN      : '(' ;
RPAREN      : ')' ;
COMMA       : ',' ;
DOT         : '.' ;

// Whitespace
WS          : [ \t\r\n]+ -> skip ;

// Comments
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT: '/*' .*? '*/' -> skip ;