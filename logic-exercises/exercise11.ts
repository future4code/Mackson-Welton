import * as readline from 'readline';

let read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.question("Qual é o seu nome? ", async (answer): Promise<void> => {
  await promise(answer) 
  read.close();
});

const promise = async (answer: any): Promise<any> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(answer)
      res()
    }, 2000)
  })
}