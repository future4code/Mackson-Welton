function historicalAge(age: number, initails: string = "DC"): string {

  if (initails.toLocaleUpperCase() === "AC") {
    if (age <= 1000000) {
      return "Pré-história";
    } else if (age <= 4000) {
      return "Idade Antiga";
    }
  } else {
    if (age >= 476 && age <= 1453) {
      return "Idade Média";
    } else if (age >= 1453 && age <= 1789) {
      return "Idade Moderna";
    } else if (age >= 1789) {
      return "Idade Contemporânea";
    }
  }
}

console.log(historicalAge(1500, "DC"))

console.log(historicalAge(2001))