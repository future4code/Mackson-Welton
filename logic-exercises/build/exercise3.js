"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarTexts = exports.equalTexts = void 0;
function equalTexts(text1, text2) {
    return text1 === text2;
}
exports.equalTexts = equalTexts;
function similarTexts(text1, text2) {
    console.log(text2.toUpperCase());
    return text1.toUpperCase() === text2.toUpperCase();
}
exports.similarTexts = similarTexts;
