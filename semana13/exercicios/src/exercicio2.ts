// Exercício 2

type objeto = {
  quantidade: number,
  numImpares: number,
  sum: number
};


function exercicio2(array: number[]): object {
  
  const obj: objeto = {
    quantidade: 0,
    numImpares: 0,
    sum: 0
  };

  obj.quantidade = array.length;
  obj.numImpares = array.filter(item => item % 2).length;
  obj.sum = array.reduce((sum, item) => sum += item, 0);

  return obj;
}

console.log("Exercício2: ", exercicio2([10, 15, 20, 9, 14]))