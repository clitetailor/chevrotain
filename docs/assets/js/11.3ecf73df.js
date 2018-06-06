(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{162:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("It is often useful to visually inspect a grammar's syntax diagrams during development\nor for documentation purposes.")]),r("p",[e._v("This document contains instructions on how to generate Syntax railroad diagrams for a Chevrotain\ngrammar using the "),r("a",{attrs:{href:"https://github.com/tabatkins/railroad-diagrams",target:"_blank",rel:"noopener noreferrer"}},[e._v("railroad-diagrams"),r("OutboundLink")],1),e._v("\nlibrary by @tabatkins.")]),e._m(1),r("ul",[r("li",[r("a",{attrs:{href:"https://sap.github.io/chevrotain/diagrams_samples/json.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Syntax diagrams"),r("OutboundLink")],1),e._v(".")]),r("li",[r("a",{attrs:{href:"https://sap.github.io/chevrotain/diagrams_samples/css.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Syntax diagrams"),r("OutboundLink")],1),e._v(".")])]),e._m(2),e._m(3),e._m(4),r("p",[e._v("Chevrotain provides an the "),r("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/3_4_0/globals.html#createsyntaxdiagramscode",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("createSyntaxDiagramsCode")]),r("OutboundLink")],1),e._v(" API to generate the "),r("strong",[e._v("html source code")]),e._v("\nof syntax diagrams. This html source code can then be used by an end user in either node.js or a browser:")]),e._m(5),e._m(6),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/parser/diagrams/gen_diagrams.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generating syntax diagrams to disk"),r("OutboundLink")],1)]),e._m(7)]),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/parser/diagrams/diagrams_browser.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generating syntax diagrams dynamically into an iframe"),r("OutboundLink")],1)]),e._m(8)])]),e._m(9),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/SAP/chevrotain/tree/master/src/diagrams/render_public.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("logic for generating the HTML"),r("OutboundLink")],1),e._v("\nis quite trivial and the generated code itself is also very simple with a decent separation of concerns.\nThese can be used as a basis for creating more advanced custom scenarios, for example:")]),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"generating-syntax-diagrams-for-a-grammar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-syntax-diagrams-for-a-grammar","aria-hidden":"true"}},[this._v("#")]),this._v(" Generating Syntax Diagrams for a grammar.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Highlight usages and definitions on mouse hover.")]),t("li",[this._v("Scroll to definition of non-terminal on mouse click.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("By writing it directly to the disk in a pure node.js runtime scenario.")]),t("li",[this._v("By inserting it dynamically into an iframe in a browser scenario.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Examples:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Self contained, no need for Chevrotain or the grammar when running the html.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Requires loading "),t("strong",[this._v("both")]),this._v(" Chevrotain and the grammar when running the html.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"customization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customization","aria-hidden":"true"}},[this._v("#")]),this._v(" Customization")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Adding a module loader such as system.js/require.js")]),t("li",[this._v("Dynamically rendering diagrams of a Grammar in an IDE.")]),t("li",[this._v("Rendering diagrams of a pure EBNF grammar (Not a Chevrotain grammar) as the diagrams are rendered\nusing a serialized format.")])])}],!1,null,null,null);t.default=n.exports}}]);