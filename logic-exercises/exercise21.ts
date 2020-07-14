const reverseNumber = (num: number): number => {

  let array: string[] = [];
  let numToString: string = num.toString();

  for (let i = numToString.length - 1; i >= 0; i--) {
    if (numToString[i] == "-") {
      array.unshift("-");
      break;
    }

    array.push(numToString[i])
  }

  num = Number(array.join(""));

  return num;
}

const num: number = -123;

reverseNumber(num);