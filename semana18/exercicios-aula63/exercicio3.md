### Exercício 3

a)

export function performAttack(attacker: Character, defender: Character) {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Peronsagem invalido")
  } else if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
}

b)

export function performAttack(
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  } else if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
}

c) Na primeira função é utilizada a função importada de outro arquivo e na segunda função uma função é passada por parâmetro.