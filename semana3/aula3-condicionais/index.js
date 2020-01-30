/* EXERCÍCIO 1 

A condição if testa se se resto de um número dívidido por dois é igual a zero e imprime a mensagem "Passou no teste"
se o resultado for verdadeiro e "Não passou no teste" se o resultado for falso.

*/

/* EXERCÍCIO 2 

a. O código compara e seleciona o item listado com o nome da fruta digitado pelo usuário e imprime no console uma mensagem com
o nome fruta e seu preço.

b. O preço da fruta Maçã é R$ 2.25

c. R$ 24.55

d. O preço da fruta Pêra é R$ 5

*/

/* EXERCÍCIO 3

É mostrado uma mensagem de erro indicando que a variavel mensagem não está definida e 
isso ocorre por conta da limitação de escopo. A variável declarada dentro de um bloco if só existe dentro deste bloco e 
nos blocos inseridos dentro dele.

*/

// EXERCÍCIO 4

// a. O segundo número digitdo aparece no console.
const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));

if (num1 > num2) {

    console.log(num1);
    console.log(num2);

} else {

    console.log(num2);
    console.log(num1);

}

// b. O terceiro número é exbido no console.
const num1 = Number(prompt("Digite o primeiro número"));
const num2 = Number(prompt("Digite o segundo número"));
const num3 = Number(prompt("Digite o terceiro número"));

if (num1 > num2 && num1 > num3) {

    console.log(num1);

    if (num2 > num3) {
        console.log(num2);
        console.log(num3);
    } else {
        console.log(num3);
        console.log(num2);
    }

} else if (num2 > num1 && num2 > num3) {

    console.log(num2);

    if (num1 > num3) {
        console.log(num1);
        console.log(num3);
    } else {
        console.log(num3);
        console.log(num1);
    }

} else {
    console.log(num3);
    console.log(num2);
    console.log(num1);
}

// c. 
const num1 = Number(prompt("Digite o primeiro número"));
const num2 = Number(prompt("Digite o segundo número"));
const num3 = Number(prompt("Digite o terceiro número"));

if (num1 !== num2 || num1 !== num3 || num2 !== num3) {

    if (num1 > num2 && num1 > num3) {

        console.log(num1);

        if (num2 > num3) {
            console.log(num2);
            console.log(num3);
        } else {
            console.log(num3);
            console.log(num2);
        }

    } else if (num2 > num1 && num2 > num3) {

        console.log(num2);
        
        if (num1 > num3) {
            console.log(num1);
            console.log(num3);
        } else {
            console.log(num3);
            console.log(num1);
        }

    } else {
        console.log(num3);
        console.log(num2);
        console.log(num1);
    }

} else {
    console.log("Você deve, ao menos, inserir um número diferente")
}

// EXERCÍCIO 5

//a. https://drive.google.com/file/d/1tNNJA_n-L-13SdU8uyjnUaC7JFHtPem3/view?usp=sharing

const esqueleto = prompt("Possuí ossos formando seu esqueleto? [s/n]");

if (esqueleto === "s") {
    const pelos = prompt("Tem pelos? [s/n]");
    if (pelos === "s") {
        const racional = prompt("É racional? [s/n]");
        if (racional === "s") {

            console.log("Ser Humano");

        } else {
            console.log("Mamífero não humano");
        }

    } else {
        const penas = prompt("Tem penas? [s/n]");
        if (penas === "s") {
            console.log("Ave");
        } else {
            const terrestre = prompt("É um animal terrestre? [s/n]");
            if (terrestre === "s") {
                const tempoNaAgua = prompt("Passa parte da sua vida em ambiente aquático? [s/n]");
                if (tempoNaAgua === "s") {
                    console.log("Anfíbio");
                } else {
                    console.log("Ráptil");
                }
            } else {
                console.log("Peixe");
            }
        }
    }
} else {
    console.log("Invertebrado");
}