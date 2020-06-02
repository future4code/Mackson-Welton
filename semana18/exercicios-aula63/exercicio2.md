### Exercício 2

describe("Teste com nome vazio deve retornar false.", () => {
  test("Teste com nome vazio", () => {
    const character: Character = {
      name: "",
      life: 1500,
      defense: 100,
      strength: 200
    };

    

    const result = validateCharacter(character);

    expect(result).toBe(false)

  })

  test("Teste com vida vazia deve retornar false.", () => {
    const character: Character = {
      name: "Astrodev",
      life: undefined,
      defense: 100,
      strength: 200
    };

    

    const result = validateCharacter(character);

    expect(result).toBe(false)

  })

  test("Teste com força vazia deve retornar false.", () => {
    const character: Character = {
      name: "Astrodev",
      life: 1500,
      defense: 100,
      strength: undefined
    };

    

    const result = validateCharacter(character);

    expect(result).toBe(false)

  })

  test("Teste com defesa vazia deve retornar false.", () => {
    const character: Character = {
      name: "Astrodev",
      life: 1500,
      defense: undefined,
      strength: 200
    };
    
    const result = validateCharacter(character);

    expect(result).toBe(false)

  })

  test("Teste com defesa negativa deve retornar false.", () => {
    const character: Character = {
      name: "Astrodev",
      life: 1500,
      defense: -100,
      strength: 200
    };
    
    const result = validateCharacter(character);

    expect(result).toBe(false)

  })

  test("Teste com defesa 0 deve retornar false.", () => {
    const character: Character = {
      name: "Astrodev",
      life: 1500,
      defense: 0,
      strength: 200
    };
    
    const result = validateCharacter(character);

    expect(result).toBe(true)

  })

  test("Teste com todas as informações validas deve retornar true.", () => {
    const character: Character = {
      name: "Astrodev",
      life: 1500,
      defense: 100,
      strength: 200
    };
    
    const result = validateCharacter(character);

    expect(result).toBe(true)

  })


})