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

    const postsDoBlog = []
    postsDoBlog.push(novoPost);

    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#conteudo").value = "";

    console.log(postsDoBlog);

    exibirPosts(postsDoBlog)
}

function exibirPosts(postsDoBlog) {
    const espacoBlog = document.querySelector(".posts")
    espacoBlog.innerHTML += `<h1>${postsDoBlog[0].titulo}<h1>`;
    espacoBlog.innerHTML += `<h3>${postsDoBlog[0].autor}<h3>`;
    espacoBlog.innerHTML += `<p>${postsDoBlog[0].conteudo}<p>`;
}