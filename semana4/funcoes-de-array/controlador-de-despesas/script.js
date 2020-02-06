const todasAsDespesas = []

class Despesas {
    constructor(valor, tipo, descricao) {
    this.valor = valor;
    this.tipo = tipo;
    this.descricao = descricao;
    }
}


function novaDespesa() {
    const valor = Number(document.querySelector("#valor").value);
    const tipo = document.querySelector("#tipo-despesa").value;
    const descricao = document.querySelector("#descricao").value;

    if (valor === "" || tipo === "" || descricao === "") {
        alert("Campo não pode ficar em branco")
    } {
        const despesa = new Despesas(valor, tipo, descricao);
        todasAsDespesas.push(despesa);
        listaTodasAsDespesas(todasAsDespesas);
    }
}

function listaTodasAsDespesas(todasAsDespesas) {
    const tabela = document.querySelector(".tabela-de-despesas > tbody");

    for(let x = 0; x < todasAsDespesas.length; x++) {
        tabela.innerHTML += `
        <tr>
        <td>${todasAsDespesas[x].tipo}<td>
        <td>${todasAsDespesas[x].valor}<td>
        <td>${todasAsDespesas[x].descricao}<td>
        </tr>`
    }
}

function filtrar() {

    const tipo = document.querySelector("#tipo-despesa-filtro").value;
    const valorMin = Number(document.querySelector("#valorMinimo").value);
    const valorMax = Number(document.querySelector("#valorMaximo").value);

    const resultadoDoFiltro = todasAsDespesas.filter((despesa) => {
        return despesa.tipo === tipo && despesa.valor >= valorMin && despesa.valor <= valorMax;
    })

    listaExtrato(resultadoDoFiltro)
}

function listaExtrato(resultadoDoFiltro) {

    let extrato = document.querySelector(".extrato");

    let soma = 0;

    for (let i = 0; i < resultadoDoFiltro.length; i++) {
        soma += resultadoDoFiltro[i].valor;
    }


    extrato.innerHTML += `<h2>Extrato</h2>`;
    extrato.innerHTML += `<h3>Valor Total: ${soma}</h3>`;

}

function limparFiltros() {
    document.querySelector("#valorMinimo").value = "";
    document.querySelector("#valorMaximo").value = "";
}