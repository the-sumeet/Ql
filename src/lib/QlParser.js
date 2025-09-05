// Generated from Ql.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import QlListener from './QlListener.js';
import QlVisitor from './QlVisitor.js';

const serializedATN = [4,1,30,116,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,
1,28,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,74,8,2,1,3,1,3,1,4,1,
4,1,4,5,4,81,8,4,10,4,12,4,84,9,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,92,8,5,1,6,
1,6,1,6,1,6,1,6,5,6,99,8,6,10,6,12,6,102,9,6,3,6,104,8,6,1,6,1,6,1,7,1,7,
1,7,5,7,111,8,7,10,7,12,7,114,9,7,1,7,1,82,1,2,8,0,2,4,6,8,10,12,14,0,1,
1,0,1,6,126,0,16,1,0,0,0,2,27,1,0,0,0,4,73,1,0,0,0,6,75,1,0,0,0,8,77,1,0,
0,0,10,91,1,0,0,0,12,93,1,0,0,0,14,107,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,
1,18,1,1,0,0,0,19,20,6,1,-1,0,20,21,5,9,0,0,21,28,3,2,1,3,22,23,5,24,0,0,
23,24,3,2,1,0,24,25,5,25,0,0,25,28,1,0,0,0,26,28,3,4,2,0,27,19,1,0,0,0,27,
22,1,0,0,0,27,26,1,0,0,0,28,37,1,0,0,0,29,30,10,5,0,0,30,31,5,7,0,0,31,36,
3,2,1,6,32,33,10,4,0,0,33,34,5,8,0,0,34,36,3,2,1,5,35,29,1,0,0,0,35,32,1,
0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,3,1,0,0,0,39,37,1,0,0,
0,40,41,3,14,7,0,41,42,3,6,3,0,42,43,3,10,5,0,43,74,1,0,0,0,44,45,3,14,7,
0,45,46,5,10,0,0,46,47,5,24,0,0,47,48,3,8,4,0,48,49,5,25,0,0,49,74,1,0,0,
0,50,51,3,14,7,0,51,52,5,11,0,0,52,53,5,24,0,0,53,54,3,8,4,0,54,55,5,25,
0,0,55,74,1,0,0,0,56,57,3,14,7,0,57,58,5,12,0,0,58,59,3,10,5,0,59,74,1,0,
0,0,60,61,3,14,7,0,61,62,5,13,0,0,62,63,3,10,5,0,63,74,1,0,0,0,64,65,3,14,
7,0,65,66,5,14,0,0,66,67,5,15,0,0,67,74,1,0,0,0,68,69,3,14,7,0,69,70,5,14,
0,0,70,71,5,9,0,0,71,72,5,15,0,0,72,74,1,0,0,0,73,40,1,0,0,0,73,44,1,0,0,
0,73,50,1,0,0,0,73,56,1,0,0,0,73,60,1,0,0,0,73,64,1,0,0,0,73,68,1,0,0,0,
74,5,1,0,0,0,75,76,7,0,0,0,76,7,1,0,0,0,77,82,3,10,5,0,78,79,5,26,0,0,79,
81,3,10,5,0,80,78,1,0,0,0,81,84,1,0,0,0,82,83,1,0,0,0,82,80,1,0,0,0,83,9,
1,0,0,0,84,82,1,0,0,0,85,92,5,18,0,0,86,92,5,19,0,0,87,92,5,20,0,0,88,92,
5,21,0,0,89,92,5,22,0,0,90,92,3,12,6,0,91,85,1,0,0,0,91,86,1,0,0,0,91,87,
1,0,0,0,91,88,1,0,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,11,1,0,0,0,93,94,5,
23,0,0,94,103,5,24,0,0,95,100,3,10,5,0,96,97,5,26,0,0,97,99,3,10,5,0,98,
96,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,104,1,0,0,0,
102,100,1,0,0,0,103,95,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,106,5,
25,0,0,106,13,1,0,0,0,107,112,5,23,0,0,108,109,5,27,0,0,109,111,5,23,0,0,
110,108,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,15,1,
0,0,0,114,112,1,0,0,0,9,27,35,37,73,82,91,100,103,112];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class QlParser extends antlr4.Parser {

    static grammarFileName = "Ql.g4";
    static literalNames = [ null, "'='", null, "'<'", "'<='", "'>'", "'>='", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'('", "')'", "','", "'.'" ];
    static symbolicNames = [ null, "EQ", "NE", "LT", "LE", "GT", "GE", "AND", 
                             "OR", "NOT", "IN", "NOT_IN", "CONTAINS", "NOT_CONTAINS", 
                             "IS", "EMPTY", "WAS", "CHANGED", "STRING", 
                             "NUMBER", "BOOLEAN", "DATE", "NULL", "IDENTIFIER", 
                             "LPAREN", "RPAREN", "COMMA", "DOT", "WS", "LINE_COMMENT", 
                             "BLOCK_COMMENT" ];
    static ruleNames = [ "query", "expression", "condition", "operator", 
                         "valueList", "value", "function", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = QlParser.ruleNames;
        this.literalNames = QlParser.literalNames;
        this.symbolicNames = QlParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, QlParser.RULE_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.expression(0);
	        this.state = 17;
	        this.match(QlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, QlParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 20;
	            this.match(QlParser.NOT);
	            this.state = 21;
	            this.expression(3);
	            break;
	        case 24:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 22;
	            this.match(QlParser.LPAREN);
	            this.state = 23;
	            this.expression(0);
	            this.state = 24;
	            this.match(QlParser.RPAREN);
	            break;
	        case 23:
	            localctx = new AtomicExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 26;
	            this.condition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 35;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, QlParser.RULE_expression);
	                    this.state = 29;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 30;
	                    this.match(QlParser.AND);
	                    this.state = 31;
	                    this.expression(6);
	                    break;

	                case 2:
	                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, QlParser.RULE_expression);
	                    this.state = 32;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 33;
	                    this.match(QlParser.OR);
	                    this.state = 34;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, QlParser.RULE_condition);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.field();
	            this.state = 41;
	            this.operator();
	            this.state = 42;
	            this.value();
	            break;

	        case 2:
	            localctx = new InConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.field();
	            this.state = 45;
	            this.match(QlParser.IN);
	            this.state = 46;
	            this.match(QlParser.LPAREN);
	            this.state = 47;
	            this.valueList();
	            this.state = 48;
	            this.match(QlParser.RPAREN);
	            break;

	        case 3:
	            localctx = new NotInConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.field();
	            this.state = 51;
	            this.match(QlParser.NOT_IN);
	            this.state = 52;
	            this.match(QlParser.LPAREN);
	            this.state = 53;
	            this.valueList();
	            this.state = 54;
	            this.match(QlParser.RPAREN);
	            break;

	        case 4:
	            localctx = new ContainsConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.field();
	            this.state = 57;
	            this.match(QlParser.CONTAINS);
	            this.state = 58;
	            this.value();
	            break;

	        case 5:
	            localctx = new NotContainsConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 60;
	            this.field();
	            this.state = 61;
	            this.match(QlParser.NOT_CONTAINS);
	            this.state = 62;
	            this.value();
	            break;

	        case 6:
	            localctx = new IsEmptyConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 64;
	            this.field();
	            this.state = 65;
	            this.match(QlParser.IS);
	            this.state = 66;
	            this.match(QlParser.EMPTY);
	            break;

	        case 7:
	            localctx = new IsNotEmptyConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 68;
	            this.field();
	            this.state = 69;
	            this.match(QlParser.IS);
	            this.state = 70;
	            this.match(QlParser.NOT);
	            this.state = 71;
	            this.match(QlParser.EMPTY);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, QlParser.RULE_operator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueList() {
	    let localctx = new ValueListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, QlParser.RULE_valueList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.value();
	        this.state = 82;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 78;
	                this.match(QlParser.COMMA);
	                this.state = 79;
	                this.value(); 
	            }
	            this.state = 84;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, QlParser.RULE_value);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            localctx = new StringValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.match(QlParser.STRING);
	            break;
	        case 19:
	            localctx = new NumberValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.match(QlParser.NUMBER);
	            break;
	        case 20:
	            localctx = new BooleanValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 87;
	            this.match(QlParser.BOOLEAN);
	            break;
	        case 21:
	            localctx = new DateValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 88;
	            this.match(QlParser.DATE);
	            break;
	        case 22:
	            localctx = new NullValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 89;
	            this.match(QlParser.NULL);
	            break;
	        case 23:
	            localctx = new FunctionValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 90;
	            this.function_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, QlParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(QlParser.IDENTIFIER);
	        this.state = 94;
	        this.match(QlParser.LPAREN);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 16515072) !== 0)) {
	            this.state = 95;
	            this.value();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===26) {
	                this.state = 96;
	                this.match(QlParser.COMMA);
	                this.state = 97;
	                this.value();
	                this.state = 102;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 105;
	        this.match(QlParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, QlParser.RULE_field);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(QlParser.IDENTIFIER);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 108;
	            this.match(QlParser.DOT);
	            this.state = 109;
	            this.match(QlParser.IDENTIFIER);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

QlParser.EOF = antlr4.Token.EOF;
QlParser.EQ = 1;
QlParser.NE = 2;
QlParser.LT = 3;
QlParser.LE = 4;
QlParser.GT = 5;
QlParser.GE = 6;
QlParser.AND = 7;
QlParser.OR = 8;
QlParser.NOT = 9;
QlParser.IN = 10;
QlParser.NOT_IN = 11;
QlParser.CONTAINS = 12;
QlParser.NOT_CONTAINS = 13;
QlParser.IS = 14;
QlParser.EMPTY = 15;
QlParser.WAS = 16;
QlParser.CHANGED = 17;
QlParser.STRING = 18;
QlParser.NUMBER = 19;
QlParser.BOOLEAN = 20;
QlParser.DATE = 21;
QlParser.NULL = 22;
QlParser.IDENTIFIER = 23;
QlParser.LPAREN = 24;
QlParser.RPAREN = 25;
QlParser.COMMA = 26;
QlParser.DOT = 27;
QlParser.WS = 28;
QlParser.LINE_COMMENT = 29;
QlParser.BLOCK_COMMENT = 30;

QlParser.RULE_query = 0;
QlParser.RULE_expression = 1;
QlParser.RULE_condition = 2;
QlParser.RULE_operator = 3;
QlParser.RULE_valueList = 4;
QlParser.RULE_value = 5;
QlParser.RULE_function = 6;
QlParser.RULE_field = 7;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_query;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(QlParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitQuery(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitQuery(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OR() {
	    return this.getToken(QlParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.OrExpressionContext = OrExpressionContext;

class AndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	AND() {
	    return this.getToken(QlParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.AndExpressionContext = AndExpressionContext;

class ParenthesizedExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(QlParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(QlParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterParenthesizedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitParenthesizedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitParenthesizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class AtomicExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterAtomicExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitAtomicExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitAtomicExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.AtomicExpressionContext = AtomicExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(QlParser.NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.NotExpressionContext = NotExpressionContext;

class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_condition;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	IN() {
	    return this.getToken(QlParser.IN, 0);
	};

	LPAREN() {
	    return this.getToken(QlParser.LPAREN, 0);
	};

	valueList() {
	    return this.getTypedRuleContext(ValueListContext,0);
	};

	RPAREN() {
	    return this.getToken(QlParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterInCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitInCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitInCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.InConditionContext = InConditionContext;

class IsNotEmptyConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	IS() {
	    return this.getToken(QlParser.IS, 0);
	};

	NOT() {
	    return this.getToken(QlParser.NOT, 0);
	};

	EMPTY() {
	    return this.getToken(QlParser.EMPTY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterIsNotEmptyCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitIsNotEmptyCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitIsNotEmptyCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.IsNotEmptyConditionContext = IsNotEmptyConditionContext;

class NotContainsConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	NOT_CONTAINS() {
	    return this.getToken(QlParser.NOT_CONTAINS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterNotContainsCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitNotContainsCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitNotContainsCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.NotContainsConditionContext = NotContainsConditionContext;

class IsEmptyConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	IS() {
	    return this.getToken(QlParser.IS, 0);
	};

	EMPTY() {
	    return this.getToken(QlParser.EMPTY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterIsEmptyCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitIsEmptyCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitIsEmptyCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.IsEmptyConditionContext = IsEmptyConditionContext;

class ContainsConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	CONTAINS() {
	    return this.getToken(QlParser.CONTAINS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterContainsCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitContainsCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitContainsCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.ContainsConditionContext = ContainsConditionContext;

class ComparisonConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterComparisonCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitComparisonCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitComparisonCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.ComparisonConditionContext = ComparisonConditionContext;

class NotInConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	NOT_IN() {
	    return this.getToken(QlParser.NOT_IN, 0);
	};

	LPAREN() {
	    return this.getToken(QlParser.LPAREN, 0);
	};

	valueList() {
	    return this.getTypedRuleContext(ValueListContext,0);
	};

	RPAREN() {
	    return this.getToken(QlParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterNotInCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitNotInCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitNotInCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.NotInConditionContext = NotInConditionContext;

class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_operator;
    }

	EQ() {
	    return this.getToken(QlParser.EQ, 0);
	};

	NE() {
	    return this.getToken(QlParser.NE, 0);
	};

	LT() {
	    return this.getToken(QlParser.LT, 0);
	};

	LE() {
	    return this.getToken(QlParser.LE, 0);
	};

	GT() {
	    return this.getToken(QlParser.GT, 0);
	};

	GE() {
	    return this.getToken(QlParser.GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_valueList;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QlParser.COMMA);
	    } else {
	        return this.getToken(QlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterValueList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitValueList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitValueList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DateValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DATE() {
	    return this.getToken(QlParser.DATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterDateValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitDateValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitDateValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.DateValueContext = DateValueContext;

class StringValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(QlParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterStringValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitStringValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitStringValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.StringValueContext = StringValueContext;

class FunctionValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterFunctionValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitFunctionValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitFunctionValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.FunctionValueContext = FunctionValueContext;

class BooleanValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(QlParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterBooleanValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitBooleanValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitBooleanValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.BooleanValueContext = BooleanValueContext;

class NumberValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(QlParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterNumberValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitNumberValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitNumberValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.NumberValueContext = NumberValueContext;

class NullValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(QlParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterNullValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitNullValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitNullValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

QlParser.NullValueContext = NullValueContext;

class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_function;
    }

	IDENTIFIER() {
	    return this.getToken(QlParser.IDENTIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(QlParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(QlParser.RPAREN, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QlParser.COMMA);
	    } else {
	        return this.getToken(QlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QlParser.RULE_field;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QlParser.IDENTIFIER);
	    } else {
	        return this.getToken(QlParser.IDENTIFIER, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QlParser.DOT);
	    } else {
	        return this.getToken(QlParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QlListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof QlVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




QlParser.QueryContext = QueryContext; 
QlParser.ExpressionContext = ExpressionContext; 
QlParser.ConditionContext = ConditionContext; 
QlParser.OperatorContext = OperatorContext; 
QlParser.ValueListContext = ValueListContext; 
QlParser.ValueContext = ValueContext; 
QlParser.FunctionContext = FunctionContext; 
QlParser.FieldContext = FieldContext; 
