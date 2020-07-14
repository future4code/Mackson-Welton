const skipHouses = (array: number[]) => {

  let count: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      count += array[i];
    }
  }

  return count;
}

skipHouses([2,7,9,3,1]);