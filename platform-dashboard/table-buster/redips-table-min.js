/*
Copyright (c)  2008-2020, www.redips.net  All rights reserved.
Code licensed under the BSD License: http://www.redips.net/license/
http://www.redips.net/javascript/table-td-merge-split/
Version 1.2.0
Mar 23, 2020.
*/
var REDIPS = REDIPS || {};

REDIPS.table = (function () {
	var e = [],
		q,
		m;
	var t = function (a) {
		-1 < a.className.indexOf("ignore") ||
			(!0 === q
				? REDIPS.event.add(a, "mouseover", z)
				: REDIPS.event.remove(a, "mouseover", z));
	};
	var z = function (a) {
		var b = a || window.event;
		a = A(b.target || b.srcElement);
		if (a) {
			var d = !!/^\s*$/.test(a.innerHTML);
			if (!1 !== REDIPS.table.markNonEmpty || !1 !== d)
				(b = b.which ? b.which : b.button),
					1 === b &&
					((a.redips = a.redips || {}),
						!0 === a.redips.selected ? u(!1, a) : u(!0, a));
		}
	};
	var A = function (a) {
		//debugger;
		return a
			? "TD" === a.nodeName || "TH" === a.nodeName
				? a
				: A(a.parentNode)
			: null;
	};
	var B = function (a, b, d, c, f, l) {
		var k = 0;
		var g = "v" === f ? a[d + "-" + b] : a[b + "-" + d];
		for (d += 1; d < c; d++) {
			var e = "v" === f ? d + "-" + b : b + "-" + d;
			a[e] &&
				((e = a[e]),
					(k += "v" === f ? e.rowSpan : e.colSpan),
					E(e, g),
					e.parentNode.deleteCell(e.cellIndex));
		}
		void 0 !== g &&
			("v" === f ? (g.rowSpan += k) : (g.colSpan += k),
				(!0 !== l && void 0 !== l) || u(!1, g));
	};

	var x = function (a) {
		var b = a.rows,
			d = 0;
		"string" === typeof a && document.getElementById(a);
		for (var c = 0; c < b.length; c++) {
			for (var f = (a = 0); f < b[c].cells.length; f++)
				a += b[c].cells[f].colSpan || 1;
			a > d && (d = a);
		}
		return d;
	};
	var C = function (a) {
		var b = [];
		void 0 !== a &&
			("string" === typeof a && (a = document.getElementById(a)),
				a && "object" === typeof a && "TABLE" === a.nodeName && (b[0] = a));
		return b;
	};

	var u = function (a, b, d, c) {
		if ("boolean" === typeof a) {
			if ("string" === typeof b) b = document.getElementById(b);
			else if ("object" !== typeof b) return;
			"TABLE" === b.nodeName && ((b = v(b)), (b = b[d + "-" + c]));
			!b ||
				("TD" !== b.nodeName && "TH" !== b.nodeName) ||
				((b.redips = b.redips || {}),
					"string" === typeof REDIPS.table.color.cell &&
					(!0 === a
						? ((b.redips.background_old = b.style.backgroundColor),
							(b.style.backgroundColor = REDIPS.table.color.cell))
						: (b.style.backgroundColor = b.redips.background_old)),
					(b.redips.selected = a));
		}
	};
	var u1 = function (a, b, d, c) {
		if ("boolean" === typeof a) {
			if ("string" === typeof b) b = document.getElementById(b);
			else if ("object" !== typeof b) return;
			"TABLE" === b.nodeName && ((b = v(b)), (b = b[d + "-" + c]));
			!b ||
				("TD" !== b.nodeName && "TH" !== b.nodeName) ||
				((b.redips = b.redips || {}),
					"string" === typeof REDIPS.table.color1.row &&
					(!0 === a
						? ((b.redips.background_old = b.style.backgroundColor),
							(b.style.backgroundColor = REDIPS.table.color1.row))
						: (b.style.backgroundColor = b.redips.background_old)),
					(b.redips.selected = a));
		}
	};

	var y = function () {
		if (window.getSelection) window.getSelection().removeAllRanges();
		else if (document.selection && "Text" === document.selection.type)
			try {
				document.selection.empty();
			} catch (a) { }
	};
	var v = function (a) {
		var b = [],
			d = {},
			c;
		var f = a.rows;
		for (var e = 0; e < f.length; e++)
			for (var k = 0; k < f[e].cells.length; k++) {
				var g = f[e].cells[k];
				a = g.parentNode.rowIndex;
				var q = g.rowSpan || 1;
				var n = g.colSpan || 1;
				b[a] = b[a] || [];
				for (c = 0; c < b[a].length + 1; c++)
					if ("undefined" === typeof b[a][c]) {
						var h = c;
						break;
					}
				d[a + "-" + h] = g;
				for (c = a; c < a + q; c++) {
					b[c] = b[c] || [];
					g = b[c];
					for (var p = h; p < h + n; p++) g[p] = "x";
				}
			}
		return d;
	};
	var E = function (a, b) {
		if (a !== b) {
			var d = a.childNodes.length;
			for (var c = 0, f = 0; c < d; c++)
				1 === a.childNodes[f].nodeType ? b.appendChild(a.childNodes[f]) : f++;
		}
	};
	var w = function (a) {
		if (void 0 !== a || !0 === m) {
			void 0 !== a && (m = a);
			for (var b, d, c, f = 0; f < e.length; f++) {
				a = e[f].rows;
				c = x(e[f]);
				d = v(e[f]);
				//****** */
				m="";
				for (var l = 0; l < a.length; l++)
					for (var k = 0; k < c; k++)
						d[l + "-" + k] &&
							((b = d[l + "-" + k]), (b.innerHTML = m ));
							//((b = d[l + "-" + k]), (b.innerHTML = m ? l + "-" +k:""));
			}
		}
	};
	return {
		color1: { cell: !1, row: !1, column: !1 },
		markNonEmpty: !0,
		onMouseDown: function (a, b, d) {
			var c = function (a) {
				var b = [],
					c;
				a = a.getElementsByTagName("table");
				for (c = 0; c < a.length; c++) b.push(a[c]);
				return b;
			};
			q = b;
			if ("string" === typeof a)
				if ("classname" === d)
					for (e = c(document), b = 0; b < e.length; b++)
						-1 === e[b].className.indexOf(a) && (e.splice(b, 1), b--);
				else a = document.getElementById(a);
			a &&
				"object" === typeof a &&
				("TABLE" === a.nodeName ? (e[0] = a) : (e = c(a)));
			for (a = 0; a < e.length; a++) {
				c = e[a].getElementsByTagName("th");
				for (b = 0; b < c.length; b++) t(c[b]);
				c = e[a].getElementsByTagName("td");
				for (b = 0; b < c.length; b++) t(c[b]);
			}
			w();
		},
		color: { cell: !1, row: !1, column: !1 },
		markNonEmpty: !0,
		onMouseDown: function (a, b, d) {
			var c = function (a) {
				var b = [],
					c;
				a = a.getElementsByTagName("table");
				for (c = 0; c < a.length; c++) b.push(a[c]);
				return b;
			};
			q = b;
			if ("string" === typeof a)
				if ("classname" === d)
					for (e = c(document), b = 0; b < e.length; b++)
						-1 === e[b].className.indexOf(a) && (e.splice(b, 1), b--);
				else a = document.getElementById(a);
			a &&
				"object" === typeof a &&
				("TABLE" === a.nodeName ? (e[0] = a) : (e = c(a)));
			for (a = 0; a < e.length; a++) {
				c = e[a].getElementsByTagName("th");
				for (b = 0; b < c.length; b++) t(c[b]);
				c = e[a].getElementsByTagName("td");
				for (b = 0; b < c.length; b++) t(c[b]);
			}
			w();
		},
		mark: u,
		merge: function (a, b, d) {
			var c, f;
			y();
			d = void 0 === d ? e : C(d);
			for (var l = 0; l < d.length; l++) {
				var k = v(d[l]);
				var g = d[l].rows;
				var q = "v" === a ? x(d[l]) : g.length;
				g = "v" === a ? g.length : x(d[l]);
				for (var n = 0; n < q; n++) {
					var h = (f = -1);
					for (c = 0; c <= g; c++) {
						var p = "v" === a ? c + "-" + n : n + "-" + c;
						if (k[p]) {
							var r = k[p];
							r.redips = r.redips || {};
							var m = r ? r.redips.selected : !1;
							var D = "v" === a ? r.colSpan : r.rowSpan;
						} else m = !1;
						if (!0 === m && -1 === h) (h = c), (f = D);
						else if ((!0 !== m && -1 < h) || (-1 < f && f !== D))
							B(k, n, h, c, a, b),
								(h = f = -1),
								!0 === m && ((!0 !== b && void 0 !== b) || u(!1, r), (m = !1));
						k[p] && (c += "v" === a ? r.rowSpan - 1 : r.colSpan - 1);
					}
					!0 === m && B(k, n, h, c, a, b);
				}
			}
			w();
		},
		mark: u1,
		mergee: function (a, b, d) {
			var c, f;
			y();
			d = void 0 === d ? e : C(d);
			for (var l = 0; l < d.length; l++) {
				var k = v(d[l]);
				var g = d[l].rows;
				var q = "v" === a ? x(d[l]) : g.length;
				g = "v" === a ? g.length : x(d[l]);
				for (var n = 0; n < q; n++) {
					var h = (f = -1);
					for (c = 0; c <= g; c++) {
						var p = "v" === a ? c + "-" + n : n + "-" + c;
						if (k[p]) {
							var r = k[p];
							r.redips = r.redips || {};
							var m = r ? r.redips.selected : !1;
							var D = "v" === a ? r.colSpan : r.rowSpan;
						} else m = !1;
						if (!0 === m && -1 === h) (h = c), (f = D);
						else if ((!0 !== m && -1 < h) || (-1 < f && f !== D))
							B(k, n, h, c, a, b),
								(h = f = -1),
								!0 === m && ((!0 !== b && void 0 !== b) || u(!1, r), (m = !1));
						k[p] && (c += "v" === a ? r.rowSpan - 1 : r.colSpan - 1);
					}
					!0 === m && B(k, n, h, c, a, b);
				}
			}
			w();
		},
		split: function (a, b) {
			var d = function (a, b, c) {
				var d = 0;
				a = b + a.rowSpan - 1;
				for (--c; 0 <= c; c--) void 0 === f[a + "-" + c] && d++;
				return d;
			};
			y();
			b = void 0 === b ? e : C(b);
			for (var c = 0; c < b.length; c++) {
				var f = v(b[c]);
				var l = x(b[c]);
				var k = b[c].rows;
				for (var g = 0; g < k.length; g++) {
					var m = "v" === a ? l : k[g].cells.length;
					for (var n = 0; n < m; n++) {
						if ("v" === a) {
							var h = f[g + "-" + n];
							void 0 !== h && (h.redips = h.redips || {});
							if (void 0 !== h && !0 === h.redips.selected && 1 < h.rowSpan) {
								var p = d(h, g, n);
								p = k[g + h.rowSpan - 1].insertCell(n - p);
								p.colSpan = h.colSpan;
								--h.rowSpan;
								t(p);
								f = v(b[c]);
							}
						} else
							(h = k[g].cells[n]),
								(h.redips = h.redips || {}),
								!0 === h.redips.selected &&
								1 < h.colSpan &&
								(m++,
									(p = k[g].insertCell(n + 1)),
									(p.rowSpan = h.rowSpan),
									--h.colSpan,
									t(p));
						void 0 !== h && u(!1, h);
					}
				}
			}
			w();
		},
		row: function (a, b, d) {
			var c = null,
				e = 0,
				l;
			y();
			"object" !== typeof a && (a = document.getElementById(a));
			void 0 === d && (d = -1);
			if ("insert" === b) {
				c = a.rows[0];
				for (b = 0; b < c.cells.length; b++) e += c.cells[b].colSpan;
				c = a.insertRow(d);
				for (b = 0; b < e; b++) (d = c.insertCell(b)), t(d);
				w();
			} else {
				if (1 === a.rows.length) return;
				a.deleteRow(d);
				var k = v(a);
				d = a.rows.length - 1;
				e = x(a);
				for (b = 0; b < e; b++) {
					a = k[d + "-" + b];
					if (void 0 === a) {
						var g = d;
						for (l = 1; 0 <= g; g--, l++)
							if (((a = k[g + "-" + b]), void 0 !== a)) {
								a.rowSpan = l;
								break;
							}
					} else 1 < a.rowSpan && --a.rowSpan;
					b += a.colSpan - 1;
				}
			}
			return c;
		},
		column: function (a, b, d) {
			y();
			"object" !== typeof a && (a = document.getElementById(a));
			void 0 === d && (d = -1);
			if ("insert" === b) {
				for (b = 0; b < a.rows.length; b++) {
					var c = a.rows[b].insertCell(d);
					t(c);
				}
				w();
			} else if (
				((c = a.rows[0].cells),
					1 !== c.length || (1 !== c[0].colSpan && void 0 !== c[0].colSpan))
			)
				for (b = 0; b < a.rows.length; b++)
					(c = -1 === d ? a.rows[b].cells.length - 1 : d),
						(c = a.rows[b].cells[c]),
						1 < c.colSpan ? --c.colSpan : a.rows[b].deleteCell(d),
						(b += c.rowSpan - 1);
		},
		cellIndex: w,
		cellIgnore: function (a) {
			"string" === typeof a && (a = document.getElementById(a));
			REDIPS.event.remove(a, "mousedown", z);
		},
	};
})();
REDIPS.event ||
	(REDIPS.event = (function () {
		return {
			add: function (e, q, m) {
				e.addEventListener
					? e.addEventListener(q, m, !1)
					: e.attachEvent
						? e.attachEvent("on" + q, m)
						: (e["on" + q] = m);
			},
			remove: function (e, q, m) {
				e.removeEventListener
					? e.removeEventListener(q, m, !1)
					: e.detachEvent
						? e.detachEvent("on" + q, m)
						: (e["on" + q] = null);
			},
		};
	})());
