### Exercício 1

a) 

export interface Character {
  name: string,
  life: number,
  defense: number,
  strength: number
}

b)

function validateCharacter(caracter: Character): boolean {
  if (
    !caracter.name ||
    caracter.life === undefined ||
    caracter.strength === undefined ||
    caracter.defense === undefined
  ) {
    return false;
  }


  if (caracter.life < 0 || caracter.strength < 0 || caracter.defense < 0) {
    return false;
  }

  return true;
}