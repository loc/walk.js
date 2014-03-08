%lex
%%

\s+                   /* skip whitespace */
"rk.waitFor"  return 'WAITFOR'
".then"       return 'THEN'
"function"    return "FUNCTION"
"var"         return "VAR"
"("           return "("
")"           return ")"
"{"           return "{"
"}"           return "}"
"="           return "="
";"           return ";"
":"           return ":"
","           return ","
"for"         return "FOR"
">"           return "OPERATOR"   
"<"           return "OPERATOR"   
"<="          return "OPERATOR"   
">>>"         return "OPERATOR"
">>"          return "OPERATOR"
"<<"          return "OPERATOR" 
">="          return "OPERATOR"
"=="          return "OPERATOR"
"==="         return "OPERATOR"
"!="          return "OPERATOR"
"!=="         return "OPERATOR"
"+="          return "OPERATOR"
"-="          return "OPERATOR"
"*="          return "OPERATOR"
"/="          return "OPERATOR"
"%="          return "OPERATOR"
"%"           return "OPERATOR"
"<<="         return "OPERATOR"
">>="         return "OPERATOR"
">>>="        return "OPERATOR"
"|="          return "OPERATOR"
"^="          return "OPERATOR"
"&="          return "OPERATOR"
"&&"          return "OPERATOR"
"||"          return "OPERATOR"
"+"           return "OPERATOR"
"-"           return "OPERATOR"
"!"           return "OPERATOR"
"~"           return "OPERATOR"
"&"           return "OPERATOR"
"|"           return "OPERATOR"
"^"           return "OPERATOR"
"*"           return "OPERATOR"
"/"           return "OPERATOR"
"++"          return "END_UNARY"
"--"          return "END_UNARY"
"!"           return "UNARY"
"~"           return "UNARY"




\"(\\.|[^"])*\"  return "STRING"
\'(\\.|[^''])*\' return "STRING"
\'            return 'SINGLEQUOTE'
\"            return 'DOUBLEQUOTE'
[a-zA-Z_$][0-9a-zA-Z_$]*    return "VARIABLE"
\d+           return "CONSTANT"

/lex

%left      OPERATOR
%nonassoc  UNARY END_UNARY

File   : StmtList {$$ = yy.File($1); return $$;}
       ;

Module : FunctionHeader {}
       ;

FunctionList   : FunctionList "," FunctionDecl {}
               | FunctionDecl
               ;

FunctionHeader : FUNCTION OptName "(" ArgumentList ")" {}
               ;

OptName : VARIABLE
        | 
        ;


Call    : VARIABLE "(" ArgumentList ")" {}
        ;

ArgumentList : ArgumentList "," Argument {$$ = $1.concat($3);}
             | Argument {$$= [$1];}
             | {$$ = [];}
             ;

StmtBlock : "{" StmtList "}"
          ;

StmtList  : Stmt StmtList {$$ = $2.concat($1);}
          |               {$$ = [];}
          ;

Stmt    : FunctionDecl ";" {$$ = $1}
        | Call ";" {$$ = $1}
        | VarDecl ";" {$$ = $1}
        | ControlStmt
        ;

ControlStmt : FOR "(" VarDecl ";" Inequality ";" ")" StmtBlock {} ;

FunctionDecl : FunctionHeader StmtBlock {}
             ;

VarDecl : GlobalVarDecl {$$ = $1;}
        | LocalVarDecl {$$ = $1;}
        ;

GlobalVarDecl : Assignment { $$ = yy.VariableDeclaration($1, false);}
              ;

LocalVarDecl : VAR Assignment { $$ = yy.VariableDeclaration($2, true);}
             ;

VarDeclList : VarDecl "," VarDeclTail {}
            ;

VarDeclTail : VarDeclTail "," GlobalVarDecl {$$ = $1.concat($3);}
            | GlobalVarDecl {$$ = [$1];}
            ;

Assignment : LValue "=" RValue {$$ = yy.Assignment($1, $3);}
           ;

Expr       : LValue { $$ = $1; } 
           | Call {$$ = $1;}
           | CONSTANT {$$ = $1;}
           | Expr OPERATOR Expr {$$ = yy.BinaryExpr($2, $1, $3);}
           | "(" Expr ")" {$$ = $2;}
           | Expr END_UNARY {$$ = yy.UnaryExpr($2, $1);}
           | UNARY Expr {$$ = yy.UnaryExpr($1, $2);}
           ;

Object  : "{" HashList "}"
        ;

HashList  : HashList "," KeyVal {}
          | KeyVal {}
          |
          ;

KeyVal    : VARIABLE ":" RValue {}
          ;

FieldAccess : VARIABLE {$$ = [$1];}
            | FieldAccess "." VARIABLE {$$ = $1.concat($3);}
            ;

Variable : FieldAccess {$$ = yy.Variable($1);}
         ;

LValue  : Variable {$$ = $1;}
        | STRING {$$ = yy.String(yytext);}
        ;

RValue  : FunctionDecl {$$ = $1;}
        | VarDecl {$$ = $1;}
        | Expr {$$ = $1;}
        ;

Argument : RValue {$$ = $1;}
         ;