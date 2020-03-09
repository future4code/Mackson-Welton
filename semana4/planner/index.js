function adicionarTarefa() {

    const input = document.querySelector("#novaTarefa").value;
    const select = document.querySelector("#diaSemana").value;

    if (input === "") {
        alert("Campo não pode ficar vazio");
    } else {
        const dia = document.querySelector(`#${select}`)
        dia.innerHTML += `<li>${input}</li>`;
        document.querySelector("#novaTarefa").value = ""
    }
}

function limparTudo() {
    const itens = document.querySelectorAll("ul");
    for (let i = 0; i < itens.length; i++) {
        itens[i].innerHTML = "";
    }
}