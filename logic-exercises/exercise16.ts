export const stringCompression = (input: string): string => {
  let output: string = "";
  let aux: string[] = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1] && i + 1 < input.length) {
      aux.push(input[i]);
    } else {
      output += input[i] + (aux.length + 1);
      aux = [];
    }
  }

  if (output.length > input.length) {
    return input;
  }

  return output;
}

console.log(stringCompression("aabcccccaaa"));

console.log(stringCompression("accurate"));