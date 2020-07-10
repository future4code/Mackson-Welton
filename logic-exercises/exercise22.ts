const checkParentheses = (text: string) => {
  if (text.includes("(") || text.includes("[") || text.includes("{")) {

    let aux: boolean[] = [];

    for (let i = 0; i < text.length; i++) {
      if (
        String.fromCharCode(text.charCodeAt(i) + 2) == text[i + 1] ||
        String.fromCharCode(text.charCodeAt(i) + 1) == text[i + 1]
        ) {
        aux.push(true);
        i = i + 1
      } else {
        aux.push(false);
        break;
      }
    }

    return aux.indexOf(false) === -1;
  }

  return false;
}

checkParentheses("{}[](}")