type posts = {
  autor: string,
  text: string
}

const arrayPost: posts[] = [
  {autor: "Fred", text: "Hoje está um dia muito bonito!"},
  {autor: "Fred", text: "O dia começou bem."},
  {autor: "Fernanda", text: "Está tudo indo bem."},
  {autor: "Gustavo", text: "Está tudo indo bem."},
  {autor: "Vanessa", text: "A vida é maravilhosa."}
]

function postsUser(arrayPost: posts[], user: string): object {
  return arrayPost.filter(item => item.autor === user)
}

console.log(postsUser(arrayPost, "Fred"))