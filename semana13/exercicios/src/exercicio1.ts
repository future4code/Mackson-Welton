// Exercício 1
function exercicio1(num1: number, num2: number): void {
  console.log("Soma: ", num1 + num2);
  console.log("Subtraçõa: ", num1 - num2);
  console.log("Multiplicação: ", num1 * num2);
  if (num1 > num2) {
    console.log("Maior número: ", num1);
  }
  else {
    console.log("Maior número: ", num2);
  }
}


exercicio1(30, 50);