function invertText(text: string): string {
  let aux = [];
  for (let i = text.length; i >= 0; i--) {
    aux.push(text[i])
  }
  return aux.join("");
}