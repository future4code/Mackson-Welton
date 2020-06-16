"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitText = exports.textData = void 0;
function textData(text) {
    return { textSize: text.length, firstChar: text[0], endChar: text[text.length - 1] };
}
exports.textData = textData;
function splitText(text) {
    return text.split("");
}
exports.splitText = splitText;
