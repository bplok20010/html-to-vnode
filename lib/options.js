var util = require("./util");

var inBrowser = util.inBrowser,
    isUnaryTag = util.isUnaryTag,
    canBeLeftOpenTag = util.canBeLeftOpenTag;
// check whether current browser encodes a char inside attribute values

var div = void 0;

function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>';
    return div.innerHTML.indexOf('&#10;') > 0;
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

module.exports = {
    expectHTML: true,
    shouldKeepComment: false,
    isUnaryTag: isUnaryTag,
    canBeLeftOpenTag: canBeLeftOpenTag,
    shouldDecodeNewlines: shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref
};