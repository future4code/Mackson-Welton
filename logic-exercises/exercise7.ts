export function factorial(num: number): number {
  if ((num == 0) || (num == 1)) {

    return 1;

  } else {
    let aux = 1;
    for (let i = num; i > 1; i--) {
      aux = aux * i;
    }
    return aux;
  }

}