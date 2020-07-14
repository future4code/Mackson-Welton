export function equalTexts(text1: string, text2: string): boolean {
  return text1 === text2;
}

export function similarTexts(text1: string, text2: string): boolean {
  return text1.toUpperCase() === text2.toUpperCase();
}
