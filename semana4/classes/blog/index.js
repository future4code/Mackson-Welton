class Post {
    constructor(titulo, autor, conteudo, imagem) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.imagem = imagem
    }
}

function publicar() {
    const titulo = document.querySelector("#titulo").value;
    const autor = document.querySelector("#autor").value;
    const conteudo = document.querySelector("#conteudo").value;
    const imagem = document.querySelector("#imagem").value;

    const novoPost = new Post(titulo, autor, conteudo, imagem);

    const postsDoBlog = []
    postsDoBlog.push(novoPost);

    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#conteudo").value = "";
    document.querySelector("#imagem").value = "";

    console.log(postsDoBlog);

    exibirPosts(postsDoBlog)
}

function exibirPosts(postsDoBlog) {
    const espacoBlog = document.querySelector(".posts")
    espacoBlog.innerHTML += `<h1>${postsDoBlog[0].titulo}<h1>`;
    espacoBlog.innerHTML += `<h3>${postsDoBlog[0].autor}<h3>`;
    espacoBlog.innerHTML += `<p>${postsDoBlog[0].conteudo}<p>`;
    if ((postsDoBlog[0].imagem.includes("https") || postsDoBlog[0].imagem.includes("http")) &&
    (postsDoBlog[0].imagem.includes("jpg") || postsDoBlog[0].imagem.includes("png") || postsDoBlog[0].imagem.includes("bpm"))
    ) {
        espacoBlog.innerHTML += `<img src='${postsDoBlog[0].imagem}'>`;
    }
}