export const isOneEdit = (text: string, comparativeText: string): boolean => {
  if (text.length > comparativeText.length + 1 || text.length < comparativeText.length - 1) {
    return false;
  }

  let count: number = 0;

  for (const char of comparativeText) {
    if (text.indexOf(char) !== -1) {
      count++;
    }
  }


  if (count <= text.length + 1 && count >= text.length - 1) {
    return true;
  }

  return false;
}

console.log(isOneEdit("BANANA", "NANANA"))