/* eslint-env browser */
/* eslint
   semi: ["error", "always"],
   indent: [2, "tab"],
   no-tabs: 0,
   no-multiple-empty-lines: ["error", {"max": 2, "maxEOF": 1}],
   one-var: ["error", "always"],
   no-trailing-spaces: ["error", { "ignoreComments": true }] */

/* enable strict mode */
'use strict';

// global variables
var redipsURL = redipsURL || '/javascript/table-td-merge-split/', // eslint-disable-line no-use-before-define
	headerInit;

// header initialization
headerInit = function () {
	let header = document.createElement('div'),
		title = document.title,
		href = window.location.href.split('/'),
		indexLink = '<a href="..">index</a>';
	// index link is not needed for main page
	if (href[href.length - 2].startsWith('REDIPS')) {
		indexLink = '';
	}
	// add "header" DIV element
	document.body.insertBefore(header, document.body.firstChild);
	// apply inner HTML
	header.innerHTML = '<div style="color:white;background-color:#1e73be;padding:5px;text-align:center;font-size:20px">'+
	'<table><tbody><tr><td><input type="button" value="Birleştir" class="button" onclick="redips.merge()"/></td></tr></tbody></table></div>' +
		
		'<div style="text-align:right;padding-right:10px;margin-bottom:10px"></div>';
};

// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', headerInit, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', headerInit);
}
