const todasAsDespesas = []

class Despesas {
    constructor(valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}


function novaDespesa() {
    const valor = parseInt(document.querySelector("#valor").value);
    const tipo = document.querySelector("#tipo-despesa").value;
    const descricao = document.querySelector("#descricao").value;

    if (valor === "" || tipo === "" || descricao === "") {
        alert("Campo não pode ficar em branco")
    } else {
        const despesa = new Despesas(valor, tipo, descricao);
        todasAsDespesas.push(despesa);
        listaTodasAsDespesas(todasAsDespesas);
    }
}

function listaTodasAsDespesas(todasAsDespesas) {

    const tabela = document.querySelector(".tabela-de-despesas > tbody");
    tabela.innerHTML = ""

    todasAsDespesas.forEach((item, index, array) => {
        tabela.innerHTML += `
        <tr>
        <td>${todasAsDespesas[index].tipo}</td>
        <td>${todasAsDespesas[index].valor}</td>
        <td>${todasAsDespesas[index].descricao}</td>
        </tr>`
    });
}

function filtrar() {

    const tipo = document.querySelector("#tipo-despesa-filtro").value;
    const valorMin = parseInt(document.querySelector("#valorMinimo").value);
    const valorMax = parseInt(document.querySelector("#valorMaximo").value);

    const resultadoDoFiltro = todasAsDespesas.filter((despesa) => {
        return despesa.tipo === tipo && despesa.valor >= valorMin && despesa.valor <= valorMax;
    })

        listaTodasAsDespesas(resultadoDoFiltro)
        listaExtrato(resultadoDoFiltro)
}

function listaExtrato(resultadoDoFiltro) {

    let extrato = document.querySelector(".extrato");


    const total = resultadoDoFiltro.reduce((soma, despesa) => soma += despesa.valor, 0);

    extrato.innerHTML += `<h2>Extrato</h2>`;
    extrato.innerHTML += `<h3>Valor Total: ${total}</h3>`;


}


function limparFiltros() {
    document.querySelector("#valorMinimo").value = "";
    document.querySelector("#valorMaximo").value = "";
}