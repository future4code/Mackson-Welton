/* EXERCÍCIO 1

A variável i é interada 15 vezes sendo o valor incial zero, o segundo dois, o terceiro três e assim por diante e 
o resultado é somado a cada interação e o valor é armazenado na variável sum.

105

*/

/* EXERCÍCIO 2

a. Adiciona um novo elemento no final do array.

b. [10, 15, 25, 30]

c. [12, 15, 18, 21, 27, 30] e [12]
*/

// EXERCÍCIO 3

//a.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let maior = array[0];
let menor = array[0];

for (let item of array) {
  if (item > maior) {
    maior = item;
  } else if (item < menor) {
    menor = item;
  }
}

console.log("O maior número é " + maior + " e o menor é " + menor);

//b. 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
const novoArray = [];

for (let item of array) {
  novoArray.push(item / 10);
}

console.log(novoArray);

//c.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
const novoArray = [];
for (item of array) {
  if (item%2 === 0) {
    novoArray.push(item);
  }
}

 console.log(novoArray);

//d. 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
const novoArray = [];
for (i = 0; i < array.length; i++) {
  let item = "O elemento do índex " + i + " é " + array[i];
  novoArray.push(item)
}

 console.log(novoArray);