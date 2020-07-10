export function firstFunc(array: number[]): any {

  let sum: number = 0;
  let mult: number = array[0];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  for (let i = 1; i < array.length; i++) {
    mult *= array[i]
  }

  return { "Sum": sum, "Qtd": array.length, "Mult": mult }
}

export function biggerAndSmaller(array: number[]): any {

  let bigger: number = 0;
  let smaller: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > bigger) {
      bigger = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smaller || smaller === 0) {
      smaller = array[i];
    }
  }

  return { "Bigger": bigger, "Smaller": smaller }
}