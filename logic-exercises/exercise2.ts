export function textData(text: string): any {

  return {textSize: text.length, firstChar: text[0], endChar: text[text.length - 1]}

}

export function splitText(text: string): string[] {
  return text.split("");
}