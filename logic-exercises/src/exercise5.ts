export function completeArray(array) {

  let aux = [];
  let maior = 0;
  let menor = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    } else if (array[i] < menor || menor == 0) {
      menor = array[i]
    }
  }

  for (let x = menor; x <= maior; x++) {
    aux.push(x)
  }

  return aux;
}