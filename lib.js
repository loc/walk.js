// if (!module) module = {};

var lib = {
	ChildrenToParent: function(parent, children) {
		var self = this;
		children.forEach(function(child) {
			self.ChildToParent(parent, child);
		});
		return parent;
	},
	ChildToParent: function(parent, child) {
		child.parent = parent;
		return parent;
	},
	UnaryExpr: function(op, child) {
		return this.ChildToParent({
			type: "unary",
			"class": "expression",
			operator: op,
			child: child,
			children: [child]
		}, child);
	},
	BinaryExpr: function(op, left, right) {
		return this.ChildrenToParent({
			type: "binary",
			"class": "expression",
			operator: op,
			children: [left, right],
			left: left,
			right: right
		},[left, right]);
	},
	Assignment: function(left, right) {
		return this.ChildrenToParent({
			type: left.type,
			"class": "assignment",
			left: left,
			right: right,
			children: [left, right]
		}, [left, right]);
	},
	Variable: function(chain) {
		return {
			chain: chain,
			base: chain[0],
			rest: chain.slice(1, chain.length),
			type: chain.length > 1 ? "fieldAccess" : "singleton",
			"class": "variable"
		}
	},
	String: function(text) {
		return {
			value: text,
			type: "string",
			"class": "value"
		}
	},
	Constant: function(value) {
		return {
			value: value,
			type: "number",
			"class": "value"
		}
	},
	VariableDeclaration: function(assignment, isLocal) {
		assignment.isLocal = isLocal;
		return assignment;
	},
	File: function(stmts) {
		return this.ChildrenToParent({
			children: stmts,
			"class": "file",
			type: "statementList"
		}, stmts);
	}
};