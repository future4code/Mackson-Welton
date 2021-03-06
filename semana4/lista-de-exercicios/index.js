// Exercícios de interpretação de código

function interpretacaoDeCodigo() {

    /*
    1. A função conversorDeMoeada recebe um parâmetro chamado valorEmDolar, em sua primeira linha a função recebe 
    uma constante chama cotacao que armazena a entrada do usuário que foi obtida pelo prompt e posteriormente convertida em número, 
    na terceira linha a função retorna uma concatenção com string e o resultado da multiplicação do paramentro da função com o número da
    constante cotação.
    
    Abaixo da função, no escopo global, é atribuida a constante meuDinheiro a chamada da função conversorDeMoeada com o valor 100 de 
    parâmetro e logo abaixo da mesma é exibida no console o valor armazenado na variável que será o retorno da função.
    */


    /*
    2. A função investeDinheiro recebe dois parâmetros tipoDeInvestimento e valor, na primeira linha é declara uma variável sem atribuição 
    chamada valorAposInvestimento na segunda linha é utilizado um switch que compara o prâmentro tipoDeInvestimento com os seus elementos e 
    caso swicth tenha algum elemento semelhante será atribuido a variável valorAposInvestimento o resultado da mutiplicação da variável valor 
    com o elemento caso não exista será exibido um alerta com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" e por último a função 
    retornará a variável valorAposInvestimento.
    
    Após a função primeiro é atribuida a constante novoMontante a chamada da função investeDinheiro passando como parâmetro uma string 
    "Ações" e o número 150, depois é atribuida novamente mesma chama da função a outra constante segundoMontante e passado como parâmetro uma 
    string "Tesouro Direto" e número 200.
    
    Abaixo das constantes é chama a função para exibir no console no console as constante novoMontante e segundoMontante e o resultado exibido 
    no console será "165" e será mostrado um alerta com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
    
    */


    /*
    3. Na primeira linha é atribuido a uma constante numeros um array de números, na segunda linha e terceira linha é atribuido a duas 
    constantes array1 e array2 um array vazio para cada.
    
    Logo abaixo é criado um laço for que armazena na variável numero os itens do array numeros, a cada vez que o laço é realizado o item 
    aramzenado na variável numero é verificado por um if que que compara o resultado da divisão do item com zero e caso seja verdadeiro
    armazena o item no array1 e caso não seja armazena o item no array2.
    ''
    Após a conclusão do laço é chamada a função que exibe no console e para ela é passado uma string "Quantidade total de números" e o array 
    numeros seguido por um ponto e a função length que retorna o tamanho do array, também são chamados novamente função console e length
    para exibir os tamanhos do array1 e array2.
    
    */


    /*
    4. Na primeira linha é atribuida a constante numeros um array de números, na segunda linha é atribuida a variavel numero1 um valor infinito e 
    na terceira linha é atribuida a variável numero2 o valor zero. Logo abaixo foi criado um laço for que atribui a variável numero os itens do 
    array numeros a cada laço e também há duas condicionais if dentro do laço uma que compara se o item do array é menor que variável numero1 e caso 
    seja verdadeiro atribui a varável numero1 ao item daquela sequência do laço e outra que compara se o item do array é maior que a variável numero2 e
    atribui a ela o item daquela sequência do laço. 
    
    Depois que o laço é concluído é chamada duas funções que exibem no console e é passado para primeira a variável numero1 e a segunda a numero2 e o
    resulado da primeira é -10 e da segunda 1590.
    
    */

}

function logicaDeProgramacao() {
    //1.

    // É possível interar uma lista utilizado o laço for, for of e forEach.

    const array = [1, 2, 3, 4, 5]

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    for (let item of array) {
        console.log(item)
    }

    array.forEach((item, index, array) => {
        console.log(item)
    })


    //2.
    /*
      a. false
      
      b. true
      
      c. true
      
      d. true
      
      e. true
      
      
      */


    //3.

    // O código anterior está gerando um loop infinito, pois não está incrementando a varável i.

    const quantidadeDeNumerosPares = 5
    let i = 0

    while (i < quantidadeDeNumerosPares) {
        console.log("Console: ", i * 2)
        i++
    }

    //4.

    function triangulo(a, b, c) {
        if (a === b && a === c) {
            return "Este triangulo é equilátero"
        } else if ((a === b && a !== c) || (b === c && a !== b) || (a === c && c !== b)) {
            return "Este triangulo é isósceles"
        } else {
            return "Este triangulo é escaleno"
        }
    }

    //5.

    let num1 = 30;
    let num2 = 15;

    if (num1 > num2) {
        console.log("O maior é: ", num1)
        if (num1 % 2 === 0) {
            console.log(num1, " é divisível por ", num2)
        } else {
            console.log(num1, " não é divisível por ", num2)
        }
        if (num2 % 2 === 0) {
            console.log(num2, " é divisível por ", num1)
        } else {
            console.log(num2, " não é divisível por ", num1)
        }
        console.log("A diferença entre eles é ", num1 - num2)
    } else {
        console.log("O maior é: ", num2)
        if (num1 % 2 === 0) {
            console.log(num1, " é divisível por ", num2)
        } else {
            console.log(num1, " não é divisível por ", num2)
        }
        if (num2 % 2 === 0) {
            console.log(num2, " é divisível por ", num1)
        } else {
            console.log(num2, " não é divisível por ", num1)
        }
        console.log("A diferença entre eles é ", num2 - num1)
    }
}

// Exercícios de funções

function exerciciosDeFuncoes() {

    //1.

    function maiorEMenor() {
        const array = [30, 5, 40, 10, 9, 15]
        let maior = array[0]
        let menor = array[0]
        let segundoMaior = 0;
        let segundoMenor = 0;

        for (let item of array) {

            if (item > maior) {
                segundoMaior = maior
                maior = item
            } else if (item < maior) {
                maior = maior
            }

            if (item < menor) {
                segundoMenor = menor
                menor = item
            }
        }

        for (let item of array) {
            if (item > menor && item < segundoMenor) {
                segundoMenor = item
            }
        }

        console.log(segundoMaior, segundoMenor)
    }

    maiorEMenor()

    //2.

    const funcaoAnonima = function () {
        alert("Hello Future4");
    }

    funcaoAnonima()

}

// Exercício de Objetos


function exerciciosDeObjetos() {

    /*
    1. Arrays são variáveis que armazenam diversos valores que podem ou não ter relação entre sí e objetos são variáveis que 
    armezanam diversos valores que possuem relação entre sí e possuí propriedades e métodos que representam as características 
    um único objeto.
    
    */

    // 2.

    function criaRetangulo(lado1, lado2) {

        let triangulo = {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: (lado1 * lado2)
        }

        return triangulo;
    }

    // 3.

    function filme() {
        const filme = {
            titulo: "A Batalha de Riddick",
            ano: 2004,
            diretor: "David Twohy",
            atores: ["Vin Diesel", "Thandie Newton", "Karl Urban"]
        }

        let atores = ""
        filme.atores.forEach((ator, index, array) => {
            if (ator !== array[array.length - 1]) {
                atores += " " + ator + ","
            } else {
                atores += " " + ator + "."
            }
        })

        console.log("Venha assistir ao filme" + filme['titulo'] + ", de " + filme['ano'] + " dirigido por " + filme.diretor + " e estrelado por" + atores);
    }

    // 4.

    function pessoaAnonima() {
        const pessoa = {
            nome: "José",
            idade: 27,
            email: "jose@email.com",
            endereco: "Av. Dr. Camilo"
        }

        function anonimizarPessoa(pessoa) {
            const novoUsuario = {
                ...pessoa,
                nome: 'ANÔNIMO'
            }

            return novoUsuario
        }
    }
}


// Exercícios de Funções de array

function exerciciosFuncoesArray() {

    function funcoesArray() {

        const array = [
            { nome: "Pedro", idade: 20 },
            { nome: "João", idade: 10 },
            { nome: "Paula", idade: 12 },
            { nome: "Artur", idade: 89 }
        ]

    }

    //a. 

    function adultos(array) {

        const adultos = array.filter((pessoa) => {
            return pessoa.idade > 18;
        })

        return adultos;

    }


    // b.

    function criancaAdolescentes(array) {

        const adultos = array.filter((pessoa) => {
            return pessoa.idade < 18;
        })

        return adultos;

    }

    // 4.

    function emailsConsultas() {
        const consultas = [
            { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
            { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
            { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
            { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
        ]

        let pronome;
        let pronome2;

        const consulta = consultas.map((paciente) => {

            if (paciente.genero === "masculino") {
                pronome = "Sr.";
                pronome2 = "lembrá-lo";
            } else {
                pronome = "Sra.";
                pronome2 = "lembrá-la";
            }

            if (paciente.cancelada) {
                return (`Olá, ${pronome} ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)

            } else {
                return (`Olá, ${pronome} ${paciente.nome}. Estamos enviando esta mensagem para ${pronome2} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
                )
            }
        })
    }


    //5. 

    function bancoDigital() {
        const contas = [
            { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
            { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
            { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
            { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
            { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
            { cliente: "Soter", saldoTotal: 1200, compras: [] }
        ]

        let soma = 0;

        contas.forEach((clientes) => {
            clientes.compras.forEach((compras) => {
                soma += compras
            })
            clientes.saldoTotal = clientes.saldoTotal - soma
            soma = 0
        })
    }

}