/*  

EXERCÍCIO 1

a. []
b. [0,1, 0, 1, 2, 3]
c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

EXERCÍCIO 2

a. 0, 2 e undefined
b. Funcionária da mesma forma, pois o que a função está retornando é indície.

EXERCÍCIO 3

Soma o valor da variável resultadoA com os elementos do array, multplica o valor da variável resultadoB 
também com os elementos do array e por último adiciona o resultado em um novo array.

function resultado() {

}

*/


// EXERCÍCIO 4

// a.

function idadeCachorro(idadeCachorro) {
    return idadeCachorro * 7
}

console.log(idadeCachorro(4))

// b.

function infoPessoa(nome, idade, endereco, estudante) {

    if (estudante) {
        const mensagem = "Eu sou " + nome + " tenho " + idade + " anos, " + endereco + " e sou estudante"
        return mensagem
    } else {
        const mensagem = "Eu sou " + nome + " tenho " + idade + " anos, " + endereco + " e não estudante"
        return mensagem
    }
}

console.log(infoPessoa("Goli", 23, "Rua Guarapari 190", false))

// EXERCÍCIO 5

function seculo(ano) {

    let seculos = ["X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XIII", "XIX", "XX", "XXI"]


    let listaAnos = []

    for (let a = 1000; a <= 2020; a += 100) {
        listaAnos.push(a)
    }

    for (let s = 0; seculos.length; s++) {
        if (ano <= listaAnos[s]) {
            return "O ano " + ano + " pertence ao século " + seculos[s]
        }
    }
}

console.log(seculo(1630))

// EXERCÍCICIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.

function qtdElementos(array) {
    return array.length
}

console.log(qtdElementos(array))

// b.

function parOuImpar(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(parOuImpar(50))

// c.

function pares(array) {
    let qtd = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            qtd.push(array[i])
        }
    }

    return qtd.length
}


console.log(pares(array))

// d.

function pares(array) {
    let qtd = []
  
    for (let i = 0; i < array.length; i++) {
        if (parOuImpar(array[i])) {
          qtd.push(array[i])
    }
  }
  
  return qtd.length
  }
  
  
  console.log(pares(array))