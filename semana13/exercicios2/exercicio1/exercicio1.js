const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (num1 && num2) {
  switch(operation) {
    case 'add':
      console.log('\x1b[34m%s\x1b[44m', num1 + num2);
      break;
    case 'sub':
      console.log('\x1b[34m%s\x1b[44m', num1 - num2);
      break;
    case 'mult':
      console.log('\x1b[34m%s\x1b[44m', num1 * num2);
      break;
    case 'div':
      console.log('\x1b[34m%s\x1b[44m', num1 / num2);
      break;
    default:
      console.log('\x1b[31m%s\x1b[31m', 'Esperava add, sub, mult ou div como primeiro parâmetro e recebi algo diferente.')
  }

} else {
  console.log('\x1b[31m%s\x1b[31m', 'O segundo e terceiro parâmetro deve ser um número e não podem ficar em branco.')
}

