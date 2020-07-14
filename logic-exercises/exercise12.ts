import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let sum: number = 0;

console.log("Insira os números que você deseja somar abaixo. Ao digitar '0', a soma será calculada.")

rl.on('line', (input) => {
  if (Number(input) === 0) {
    console.log(sum)
    process.exit();
  }

  sum += Number(input)
  rl.setPrompt("");
  rl.prompt();
})