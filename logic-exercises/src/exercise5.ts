function transformTime(seconds: number): string {

  const hours = ((seconds / 60) / 60).toFixed();
  const secondsLeft = seconds % 3600;
  const minuts = (secondsLeft / 60) | 0;
  const finalsecondsLeft = secondsLeft % 60;

  return `${hours}h ${minuts}m ${finalsecondsLeft}s`

}