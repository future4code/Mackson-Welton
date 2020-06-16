### Exercício 7

export function recoverCharacters(characters: Character[]): Character[] {
  for (const item of characters) {
    if (!validateCharacter(item)) {
      throw new Error("Peronsagem invalido")
    } 
  }
  
  if (characters.length < 2) {
    throw new Error("Personagens insuficientes")
  }

  return characters.map(character => {
    return {...character, life: 1500};
  })
}

export function increaseChatacterAttack(character: Character, newAttack: number): void {
  if (!validateCharacter(character)) {
    throw new Error("Peronsagem invalido")
  } else if (character.strength > newAttack) {
    throw new Error("Ataque é menor do que o atual")
  }

  character.strength += newAttack;
  
}

export function decreaseCharacterDefense(character: Character, newDefense: number): void {
  if (!validateCharacter(character)) {
    throw new Error("Peronsagem invalido")
  } else if (character.defense < newDefense) {
    throw new Error("Defesa é maior do que o atual")
  }

  character.defense -= newDefense;
}