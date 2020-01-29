/* Exercícios de interpretação de código


1.

a.  false
b.  false
c.  true
d.  false
e.  boolean


2. 

a. Uma variavel especial capaz de armazenar multilplos valores. 
Declaração: let array = [item1, item2, item3];
b. 0
c. Utilizando array.length.
d. 
I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII.  1

*/

// Exercícios de escrita de código

// 1. 

// a.
let fahrenheit = 77;
let kelvin = (fahrenheit - 32)*5/9 + 273.15;
console.log(fahrenheit + "ºF é igual a " + kelvin + "K");

// b.
let celsius = 80;
fahrenheit = (celsius)*9/5 + 32;
console.log(celsius + "ºC é igual a " + fahrenheit + "ºF");

// c.
celsius = 30;
fahrenheit = (celsius)*9/5 + 32;
kelvin = (fahrenheit - 32)*5/9 + 273.15;
console.log(celsius + "ºC é igual a " + fahrenheit + "ºF e " + " " + kelvin + "K");

// d.
celsius = Number(prompt("Insira Grau Celsious para conversão"));
fahrenheit = (celsius)*9/5 + 32;
kelvin = (fahrenheit - 32)*5/9 + 273.15;
console.log(celsius + " é igual a " + fahrenheit + "ºF e " + kelvin + "K");

// 2.

let nome = prompt("Qual é o seu nome?");
console.log("Resposta " + nome);
let sobrenome = prompt("Qual é o seu sobrenome?");
console.log("Resposta " + sobrenome);
let idade = prompt("Qual é a sua idade?");
console.log("Resposta " + idade);
let endereco = prompt("Qual é o seu endereço?");
console.log("Resposta " + endereco);
let telefone = prompt("Qual é o seu número de telefone?")
console.log("Resposta " + telefone);

// 3.

//a.
let consumo = 280;
const quilowattHora = 0.05;
let valorConsumido = quilowattHora * consumo;
console.log(valorConsumido);

//b. 
let desconto = 0.15;
valorConsumido -= desconto;
console.log(valorConsumido);