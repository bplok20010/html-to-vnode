import util from './util';

const { inBrowser, isUnaryTag, canBeLeftOpenTag } = util;
// check whether current browser encodes a char inside attribute values
let div;

function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? `<a href="\n"/>` : `<div a="\n"/>`;
    return div.innerHTML.indexOf('&#10;') > 0;
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
const shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
const shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

export default {
    expectHTML: true,
    shouldKeepComment: false,
    isUnaryTag,
    canBeLeftOpenTag,
    shouldDecodeNewlines,
    shouldDecodeNewlinesForHref
};