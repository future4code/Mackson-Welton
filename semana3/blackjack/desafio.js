import comprarCarta from './naoMexer.js'

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {

   // Pontos e Cartas do Usuário
   let carta1;
   const usuarioCartas = [];
   const usuarioPontos = [];
   let totalPontosUsuario = 0;

   // Pontos e Cartas do Computador
   let carta2;
   const computadorCartas = [];
   const computadorPontos = [];
   let totalPontosComputador = 0;


   // Sorteio de cartas

   for (let i = 0; i < 2; i++) {

      carta1 = comprarCarta();
      usuarioCartas.push(carta1.texto);
      usuarioPontos.push(carta1.valor);
      totalPontosUsuario += usuarioPontos[i];

      carta2 = comprarCarta();
      computadorCartas.push(carta2.texto);
      computadorPontos.push(carta2.valor);
      totalPontosComputador += computadorPontos[i];

      if (usuarioPontos[i - 1] === 11 && usuarioPontos[i] === 11) {
         carta1 = comprarCarta();
         usuarioCartas[i - 1] = carta1.texto;
         usuarioPontos[i - 1] = carta1.valor;
         totalPontosUsuario = usuarioPontos[i - 1] + usuarioPontos[i];
      } else if (computadorPontos[i - 1] === 11 && computadorPontos[i] === 11) {
         carta2 = comprarCarta();
         computadorCartas[i - 1] = carta2.texto;
         computadorPontos[i - 1] = carta2.valor;
         totalPontosComputador = computadorPontos[i - 1] + computadorPontos[i];
      }

   }

   // Compra de cartas pelo usuário

   let cartasTotalUsuario;
   let comprar = true;

   while (totalPontosUsuario < 21 && comprar) {

      cartasTotalUsuario = usuarioCartas[0] + " ";
      for (let m = 1; m < usuarioCartas.length; m++) {
         cartasTotalUsuario += usuarioCartas[m] + " ";
      }

      if (confirm("Suas cartas são " + cartasTotalUsuario
         + "A carta revelada do computador é " + computadorCartas[0]
         + "\n" + "Deseja comprar mais uma carta?")) {
         carta1 = comprarCarta();
         usuarioCartas.push(carta1.texto);
         usuarioPontos.push(carta1.valor);
         totalPontosUsuario += usuarioPontos[usuarioPontos.length - 1];
      } else {
         comprar = false;
      }
   }

   let listaCartasUsuario = "";

   for (let x = 0; x < usuarioCartas.length; x++) {
      listaCartasUsuario += usuarioCartas[x] + " ";
   }

   // Compra de cartas pelo computador

let cartasTotalComputador;

   while (totalPontosComputador < 21) {

      cartasTotalComputador = computadorCartas[0] + " ";
      for (let m = 1; m < computadorCartas.length; m++) {
         cartasTotalComputador+= computadorCartas[m] + " ";
      }

      carta2 = comprarCarta();
      computadorCartas.push(carta2.texto);
      computadorPontos.push(carta2.valor);
      totalPontosComputador += computadorPontos[computadorPontos.length - 1];
   }

   let listaCartasComputador = "";

   for (let x = 0; x < computadorCartas.length; x++) {
      listaCartasComputador += computadorCartas[x] + " ";
   }

   // Resultado do usuário

   console.log("Usuário - cartas: " + listaCartasUsuario + " - pontuação " + totalPontosUsuario);

   // Resultado do computador

   console.log("Computador - cartas: " + listaCartasComputador + " - pontuação " + totalPontosComputador);


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