export function completeArray(array, num) {
  let aux = [];
  if (num < array[0]) {
    for (let i = array[0] - 1; i >= num; i--) {
      if (num < array[0]) {
        aux.unshift(i)
      }
    }
    return aux.concat(array);
  }
  else if (array.indexOf(num) === -1) {
      for (let i = array[array.length - 1] + 1; i <= num; i++) {
          aux.push(i)
      }
      return array.concat(aux);
    } else {
      return array;
    }
    return array;
  }