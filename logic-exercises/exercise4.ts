export function identifyNumbers(param: string): boolean {
  const num = Number(param);
  if (!num) {
    return false;
  } else {
    return true;
  }
}