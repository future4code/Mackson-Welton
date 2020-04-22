function exercicio2(array) {
    const obj = {
        quantidade: 0,
        numImpares: 0,
        sum: 0
    };
    obj.quantidade = array.length;
    obj.numImpares = array.filter(item => item % 2).length;
    obj.sum = array.reduce((sum, item) => sum += item, 0);
    return obj;
}
console.log("Exercício2: ", exercicio2([10, 15, 20, 9, 14]));
//# sourceMappingURL=exercicio2.js.map