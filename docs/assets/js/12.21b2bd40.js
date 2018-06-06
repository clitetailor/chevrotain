(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("See: "),a("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/custom_patterns/custom_patterns.js",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Runnable example")]),a("OutboundLink")],1),t._v(" for quick starting.")]),t._m(2),a("p",[t._v("Normally a Token's pattern is defined using a JavaScript regular expression:")]),t._m(3),a("p",[t._v("However in some circumstances the capability to provide a custom pattern matching implementation may be required.\nThere are a few use cases in which a custom pattern could be used:")]),a("ul",[a("li",[a("p",[t._v("The token cannot be easily (or at all) defined using pure regular expressions.")]),a("ul",[a("li",[t._v("When context on previously lexed tokens is needed.\nFor example: "),a("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lexing Python like indentation using Chevrotain"),a("OutboundLink")],1),t._v(".")])])]),a("li",[a("p",[t._v("Workaround performance issues in specific regExp engines by providing a none regExp matcher implementation:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://bugs.webkit.org/show_bug.cgi?id=152578",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebKit/Safari multiple orders of magnitude performance degradation for specific regExp patterns"),a("OutboundLink")],1),t._v(" 😞")])])])]),t._m(4),a("p",[t._v("A custom pattern has a similar API to the API of the "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegExp.prototype.exec"),a("OutboundLink")],1),t._v("\nfunction. But with a small constraint.")]),a("ul",[a("li",[t._v("A custom pattern should behave as though the RegExp "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky",target:"_blank",rel:"noopener noreferrer"}},[t._v("sticky flag"),a("OutboundLink")],1),t._v(" has been set.\nThis means that attempted matches must begin at the offset argument, "),a("strong",[t._v("not")]),t._v(" at the start of the input.")])]),a("p",[t._v("The basic syntax for supplying a custom pattern is defined by the "),a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/3_4_0/interfaces/icustompattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICustomPattern"),a("OutboundLink")],1),t._v(" interface.\nExample:")]),t._m(5),a("p",[t._v("Using an Object literal with only a single property is still a little verbose so an even more concise syntax is also supported:")]),t._m(6),t._m(7),a("p",[t._v("A custom token matcher has two optional arguments which allows accessing the current lexing context.\nThis context can be used to allow or disallow lexing certain Token Types depending\non the previously lexed tokens.")]),a("p",[t._v("Lets expand the previous example to only allow lexing integers if the previous token was not an identifier (contrived example).")]),t._m(8),a("p",[t._v("A larger and non contrived example can seen here: "),a("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lexing Python like indentation using Chevrotain"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("It is important to note that The matchedTokens and groups arguments match the token and groups properties of the tokenize output ("),a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/3_4_0/interfaces/ilexingresult.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ILexingResult"),a("OutboundLink")],1),t._v(").\nThese arguments are the current state of the lexing result so even if the lexer has performed error recovery any tokens found\nin those arguments are still guaranteed to be in the final result.")])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"custom-token-patterns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-token-patterns","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Token Patterns")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"tldr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tldr","aria-hidden":"true"}},[this._v("#")]),this._v(" TLDR")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[this._v("#")]),this._v(" Background")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" IntegerToken "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"IntegerToken"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\d+/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("matchInteger")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" endOffset "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" startOffset\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" charCode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 0-9 digits")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("charCode "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("48")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" charCode "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("57")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        endOffset"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        charCode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// No match, must return null to conform with the RegExp.prototype.exec signature")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" startOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" matchedString "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substring")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endOffset"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// according to the RegExp.prototype.exec API the first item in the returned array must be the whole matched string.")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("matchedString"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"IntegerToken"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exec"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" matchInteger "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Optional properrty that will enable optimizations in the lexer")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// See: https://sap.github.io/chevrotain/documentation/3_4_0/interfaces/itokenconfig.html#start_chars_hint")]),t._v("\n    start_chars_hint"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"4"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"8"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"9"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// pattern is passed the matcher function directly.")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("createToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"IntegerToken"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" matchInteger "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"lexing-context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lexing-context","aria-hidden":"true"}},[this._v("#")]),this._v(" Lexing Context")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tokenMatcher "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"chevrotain"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("matchInteger")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchedTokens"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groups"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lastMatchedToken "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("last")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matchedTokens"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// An Integer may not follow an Identifier")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("tokenMatcher")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastMatchedToken"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Identifier"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// No match, must return null to conform with the RegExp.prototype.exec signature")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// rest of the code from the example above...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.default=e.exports}}]);