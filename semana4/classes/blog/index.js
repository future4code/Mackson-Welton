class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function publicar() {
    const titulo = document.querySelector("#titulo").value;
    const autor = document.querySelector("#autor").value;
    const conteudo = document.querySelector("#conteudo").value;

    const novoPost = new Post(titulo, autor, conteudo);
}