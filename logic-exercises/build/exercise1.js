"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.biggerAndSmaller = exports.firstFunc = void 0;
function firstFunc(array) {
    let sum = 0;
    let mult = array[0];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for (let i = 1; i < array.length; i++) {
        mult *= array[i];
    }
    return { "Sum": sum, "Qtd": array.length, "Mult": mult };
}
exports.firstFunc = firstFunc;
function biggerAndSmaller(array) {
    let bigger = 0;
    let smaller = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > bigger) {
            bigger = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smaller || smaller === 0) {
            smaller = array[i];
        }
    }
    return { "Bigger": bigger, "Smaller": smaller };
}
exports.biggerAndSmaller = biggerAndSmaller;
