const numberOfAlgorithms = (num: number): number => {
  const numRounded = Math.round(num);
  const numToString = numRounded.toString();
  return numToString.length;
}

numberOfAlgorithms(100)