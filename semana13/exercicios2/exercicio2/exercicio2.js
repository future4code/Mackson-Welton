const nameTask = process.argv[2];
const textTask = process.argv[3];

const fs = require('fs');

const data = "\n" + textTask;

try {
  fs.appendFileSync(nameTask, data, 'utf-8');
  console.log('\x1b[34m%s\x1b[44m', 'Salvo com sucesso!')
} catch (err) {
  console.log('\x1b[31m%s\x1b[31m', err)
}