import comprarCarta from './naoMexer.js'

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {

   // Pontos e Cartas do Usuário
   const usuarioCartas = [];
   const usuarioPontos = [];
   let totalPontosUsuario = 0;

   // Pontos e Cartas do Computador
   const computadorCartas = [];
   const computadorPontos = [];
   let totalPontosComputador = 0;
   // Sorteio de cartas

   for (let i = 0; i < 2; i++) {

      let carta1 = comprarCarta();
      usuarioCartas.push(carta1.texto);
      usuarioPontos.push(carta1.valor);
      totalPontosUsuario += usuarioPontos[i];

      let carta2 = comprarCarta();
      computadorCartas.push(carta2.texto);
      computadorPontos.push(carta2.valor);
      totalPontosComputador += computadorPontos[i];
   }

   // Resultado do usuário
   console.log("Usuário - cartas: " + usuarioCartas[0] + " " + usuarioCartas[1] + " - pontuação " + totalPontosUsuario);

   // Resultado do computador
   console.log("Computador - cartas: " + computadorCartas[0] + " " + computadorCartas[1] + " - pontuação " + totalPontosComputador);


   // Indiciar o vencedor ou empate
   if (totalPontosUsuario > totalPontosComputador) {
      console.log("O usuário ganhou!");
   } else if (totalPontosUsuario < totalPontosComputador) {
      console.log("O computador ganhou!");
   } else {
      console.log("Empate!");
   }
} else {
   console.log("O jogo acabou")
}