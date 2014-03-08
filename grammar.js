/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"File":3,"StmtList":4,"Module":5,"FunctionHeader":6,"FunctionList":7,",":8,"FunctionDecl":9,"FUNCTION":10,"OptName":11,"(":12,"ArgumentList":13,")":14,"VARIABLE":15,"Call":16,"Argument":17,"StmtBlock":18,"{":19,"}":20,"Stmt":21,";":22,"VarDecl":23,"ControlStmt":24,"FOR":25,"Inequality":26,"GlobalVarDecl":27,"LocalVarDecl":28,"Assignment":29,"VAR":30,"VarDeclList":31,"VarDeclTail":32,"LValue":33,"=":34,"RValue":35,"Expr":36,"CONSTANT":37,"OPERATOR":38,"END_UNARY":39,"UNARY":40,"Object":41,"HashList":42,"KeyVal":43,":":44,"FieldAccess":45,".":46,"Variable":47,"STRING":48,"$accept":0,"$end":1},
terminals_: {2:"error",8:",",10:"FUNCTION",12:"(",14:")",15:"VARIABLE",19:"{",20:"}",22:";",25:"FOR",26:"Inequality",30:"VAR",34:"=",37:"CONSTANT",38:"OPERATOR",39:"END_UNARY",40:"UNARY",44:":",46:".",48:"STRING"},
productions_: [0,[3,1],[5,1],[7,3],[7,1],[6,5],[11,1],[11,0],[16,4],[13,3],[13,1],[13,0],[18,3],[4,2],[4,0],[21,2],[21,2],[21,2],[21,1],[24,8],[9,2],[23,1],[23,1],[27,1],[28,2],[31,3],[32,3],[32,1],[29,3],[36,1],[36,1],[36,1],[36,3],[36,3],[36,2],[36,2],[41,3],[42,3],[42,1],[42,0],[43,3],[45,1],[45,3],[47,1],[33,1],[33,1],[35,1],[35,1],[35,1],[17,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:this.$ = yy.File($$[$0]); return this.$;
break;
case 9:this.$ = $$[$0-2].concat($$[$0]);
break;
case 10:this.$= [$$[$0]];
break;
case 11:this.$ = [];
break;
case 13:this.$ = $$[$0].concat($$[$0-1]);
break;
case 14:this.$ = [];
break;
case 15:this.$ = $$[$0-1]
break;
case 16:this.$ = $$[$0-1]
break;
case 17:this.$ = $$[$0-1]
break;
case 21:this.$ = $$[$0];
break;
case 22:this.$ = $$[$0];
break;
case 23: this.$ = yy.VariableDeclaration($$[$0], false);
break;
case 24: this.$ = yy.VariableDeclaration($$[$0], true);
break;
case 26:this.$ = $$[$0-2].concat($$[$0]);
break;
case 27:this.$ = [$$[$0]];
break;
case 28:this.$ = yy.Assignment($$[$0-2], $$[$0]);
break;
case 29: this.$ = $$[$0]; 
break;
case 30:this.$ = $$[$0];
break;
case 31:this.$ = $$[$0];
break;
case 32:this.$ = yy.BinaryExpr($$[$0-1], $$[$0-2], $$[$0]);
break;
case 33:this.$ = $$[$0-1];
break;
case 34:this.$ = yy.UnaryExpr($$[$0], $$[$0-1]);
break;
case 35:this.$ = yy.UnaryExpr($$[$0-1], $$[$0]);
break;
case 41:this.$ = [$$[$0]];
break;
case 42:this.$ = $$[$0-2].concat($$[$0]);
break;
case 43:this.$ = yy.Variable($$[$0]);
break;
case 44:this.$ = $$[$0];
break;
case 45:this.$ = yy.String(yytext);
break;
case 46:this.$ = $$[$0];
break;
case 47:this.$ = $$[$0];
break;
case 48:this.$ = $$[$0];
break;
case 49:this.$ = $$[$0];
break;
}
},
table: [{1:[2,14],3:1,4:2,6:8,9:4,10:[1,13],15:[1,9],16:5,21:3,23:6,24:7,25:[1,12],27:10,28:11,29:14,30:[1,15],33:16,45:19,47:17,48:[1,18]},{1:[3]},{1:[2,1]},{1:[2,14],4:20,6:8,9:4,10:[1,13],15:[1,9],16:5,20:[2,14],21:3,23:6,24:7,25:[1,12],27:10,28:11,29:14,30:[1,15],33:16,45:19,47:17,48:[1,18]},{22:[1,21]},{22:[1,22]},{22:[1,23]},{1:[2,18],10:[2,18],15:[2,18],20:[2,18],25:[2,18],30:[2,18],48:[2,18]},{18:24,19:[1,25]},{8:[2,41],12:[1,26],14:[2,41],22:[2,41],34:[2,41],38:[2,41],39:[2,41],46:[2,41]},{8:[2,21],14:[2,21],22:[2,21]},{8:[2,22],14:[2,22],22:[2,22]},{12:[1,27]},{11:28,12:[2,7],15:[1,29]},{8:[2,23],14:[2,23],22:[2,23]},{15:[1,31],29:30,33:16,45:19,47:17,48:[1,18]},{34:[1,32]},{8:[2,44],14:[2,44],22:[2,44],34:[2,44],38:[2,44],39:[2,44]},{8:[2,45],14:[2,45],22:[2,45],34:[2,45],38:[2,45],39:[2,45]},{8:[2,43],14:[2,43],22:[2,43],34:[2,43],38:[2,43],39:[2,43],46:[1,33]},{1:[2,13],20:[2,13]},{1:[2,15],10:[2,15],15:[2,15],20:[2,15],25:[2,15],30:[2,15],48:[2,15]},{1:[2,16],10:[2,16],15:[2,16],20:[2,16],25:[2,16],30:[2,16],48:[2,16]},{1:[2,17],10:[2,17],15:[2,17],20:[2,17],25:[2,17],30:[2,17],48:[2,17]},{8:[2,20],14:[2,20],22:[2,20]},{4:34,6:8,9:4,10:[1,13],15:[1,9],16:5,20:[2,14],21:3,23:6,24:7,25:[1,12],27:10,28:11,29:14,30:[1,15],33:16,45:19,47:17,48:[1,18]},{6:8,8:[2,11],9:38,10:[1,13],12:[1,44],13:35,14:[2,11],15:[1,9],16:42,17:36,23:39,27:10,28:11,29:14,30:[1,15],33:41,35:37,36:40,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{15:[1,31],23:46,27:10,28:11,29:14,30:[1,15],33:16,45:19,47:17,48:[1,18]},{12:[1,47]},{12:[2,6]},{8:[2,24],14:[2,24],22:[2,24]},{34:[2,41],46:[2,41]},{6:8,9:38,10:[1,13],12:[1,44],15:[1,9],16:42,23:39,27:10,28:11,29:14,30:[1,15],33:41,35:48,36:40,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{15:[1,49]},{20:[1,50]},{8:[1,52],14:[1,51]},{8:[2,10],14:[2,10]},{8:[2,49],14:[2,49]},{8:[2,46],14:[2,46],22:[2,46]},{8:[2,47],14:[2,47],22:[2,47]},{8:[2,48],14:[2,48],22:[2,48],38:[1,53],39:[1,54]},{8:[2,29],14:[2,29],22:[2,29],34:[1,32],38:[2,29],39:[2,29]},{8:[2,30],14:[2,30],22:[2,30],38:[2,30],39:[2,30]},{8:[2,31],14:[2,31],22:[2,31],38:[2,31],39:[2,31]},{12:[1,44],15:[1,9],16:42,33:56,36:55,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{12:[1,44],15:[1,9],16:42,33:56,36:57,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{22:[1,58]},{6:8,8:[2,11],9:38,10:[1,13],12:[1,44],13:59,14:[2,11],15:[1,9],16:42,17:36,23:39,27:10,28:11,29:14,30:[1,15],33:41,35:37,36:40,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{8:[2,28],14:[2,28],22:[2,28]},{8:[2,42],14:[2,42],22:[2,42],34:[2,42],38:[2,42],39:[2,42],46:[2,42]},{1:[2,12],8:[2,12],10:[2,12],14:[2,12],15:[2,12],20:[2,12],22:[2,12],25:[2,12],30:[2,12],48:[2,12]},{8:[2,8],14:[2,8],22:[2,8],38:[2,8],39:[2,8]},{6:8,9:38,10:[1,13],12:[1,44],15:[1,9],16:42,17:60,23:39,27:10,28:11,29:14,30:[1,15],33:41,35:37,36:40,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{12:[1,44],15:[1,9],16:42,33:56,36:61,37:[1,43],40:[1,45],45:19,47:17,48:[1,18]},{8:[2,34],14:[2,34],22:[2,34],38:[2,34],39:[2,34]},{14:[1,62],38:[1,53],39:[1,54]},{8:[2,29],14:[2,29],22:[2,29],38:[2,29],39:[2,29]},{8:[2,35],14:[2,35],22:[2,35],38:[2,35]},{26:[1,63]},{8:[1,52],14:[1,64]},{8:[2,9],14:[2,9]},{8:[2,32],14:[2,32],22:[2,32],38:[2,32],39:[1,54]},{8:[2,33],14:[2,33],22:[2,33],38:[2,33],39:[2,33]},{22:[1,65]},{19:[2,5]},{14:[1,66]},{18:67,19:[1,25]},{1:[2,19],10:[2,19],15:[2,19],20:[2,19],25:[2,19],30:[2,19],48:[2,19]}],
defaultActions: {2:[2,1],29:[2,6],64:[2,5]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 'WAITFOR'
break;
case 2:return 'THEN'
break;
case 3:return "FUNCTION"
break;
case 4:return "VAR"
break;
case 5:return "("
break;
case 6:return ")"
break;
case 7:return "{"
break;
case 8:return "}"
break;
case 9:return "="
break;
case 10:return ";"
break;
case 11:return ":"
break;
case 12:return ","
break;
case 13:return "FOR"
break;
case 14:return "OPERATOR"   
break;
case 15:return "OPERATOR"   
break;
case 16:return "OPERATOR"   
break;
case 17:return "OPERATOR"
break;
case 18:return "OPERATOR"
break;
case 19:return "OPERATOR" 
break;
case 20:return "OPERATOR"
break;
case 21:return "OPERATOR"
break;
case 22:return "OPERATOR"
break;
case 23:return "OPERATOR"
break;
case 24:return "OPERATOR"
break;
case 25:return "OPERATOR"
break;
case 26:return "OPERATOR"
break;
case 27:return "OPERATOR"
break;
case 28:return "OPERATOR"
break;
case 29:return "OPERATOR"
break;
case 30:return "OPERATOR"
break;
case 31:return "OPERATOR"
break;
case 32:return "OPERATOR"
break;
case 33:return "OPERATOR"
break;
case 34:return "OPERATOR"
break;
case 35:return "OPERATOR"
break;
case 36:return "OPERATOR"
break;
case 37:return "OPERATOR"
break;
case 38:return "OPERATOR"
break;
case 39:return "OPERATOR"
break;
case 40:return "OPERATOR"
break;
case 41:return "OPERATOR"
break;
case 42:return "OPERATOR"
break;
case 43:return "OPERATOR"
break;
case 44:return "OPERATOR"
break;
case 45:return "OPERATOR"
break;
case 46:return "OPERATOR"
break;
case 47:return "OPERATOR"
break;
case 48:return "END_UNARY"
break;
case 49:return "END_UNARY"
break;
case 50:return "UNARY"
break;
case 51:return "UNARY"
break;
case 52:return "STRING"
break;
case 53:return "STRING"
break;
case 54:return 'SINGLEQUOTE'
break;
case 55:return 'DOUBLEQUOTE'
break;
case 56:return "VARIABLE"
break;
case 57:return "CONSTANT"
break;
}
},
rules: [/^(?:\s+)/,/^(?:rk\.waitFor\b)/,/^(?:\.then\b)/,/^(?:function\b)/,/^(?:var\b)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:=)/,/^(?:;)/,/^(?::)/,/^(?:,)/,/^(?:for\b)/,/^(?:>)/,/^(?:<)/,/^(?:<=)/,/^(?:>>>)/,/^(?:>>)/,/^(?:<<)/,/^(?:>=)/,/^(?:==)/,/^(?:===)/,/^(?:!=)/,/^(?:!==)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:%=)/,/^(?:%)/,/^(?:<<=)/,/^(?:>>=)/,/^(?:>>>=)/,/^(?:\|=)/,/^(?:\^=)/,/^(?:&=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:\+)/,/^(?:-)/,/^(?:!)/,/^(?:~)/,/^(?:&)/,/^(?:\|)/,/^(?:\^)/,/^(?:\*)/,/^(?:\/)/,/^(?:\+\+)/,/^(?:--)/,/^(?:!)/,/^(?:~)/,/^(?:"(\\.|[^"])*")/,/^(?:'(\\.|[^''])*')/,/^(?:')/,/^(?:")/,/^(?:[a-zA-Z_$][0-9a-zA-Z_$]*)/,/^(?:\d+)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}