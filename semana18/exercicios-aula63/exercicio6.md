### Exercício 6

test("Ataque menor que defesa deve retornar 1500 de vida", () => {

    const attacker: Character = {
      name: "Astrodev Attack",
      life: 1500,
      defense: 100,
      strength: 100
    }

    const defender: Character = {
      name: "Astrodev Defender",
      life: 1500,
      defense: 100,
      strength: 250
    }

    const validateCharacterMock = jest.fn(() => {
      return true;
    });

    performAttack(attacker, defender, validateCharacterMock as any)
    expect(defender.life).toEqual(1500);
    expect(validateCharacterMock).toHaveBeenCalled();
    expect(validateCharacterMock).toHaveBeenCalledTimes(2);
    expect(validateCharacterMock).toHaveReturnedTimes(2);

  })

  test("Verifica se parametro attack foi passado por parametro e deve retornar true", () => {

    const attacker: Character = {
      name: "Astrodev Attack",
      life: 1500,
      defense: 100,
      strength: 450
    }

    const defender: Character = {
      name: "Astrodev Defender",
      life: 1500,
      defense: 100,
      strength: 250
    }

    const validateCharacterMock = jest.fn(() => {
      return true;
    });

    performAttack(attacker, defender, validateCharacterMock as any)

    expect(validateCharacterMock).toHaveBeenCalledWith(attacker)

  })

  test("Função deve retornar true", () => {

    const attacker: Character = {
      name: "Astrodev Attack",
      life: 1500,
      defense: 100,
      strength: 450
    }

    const defender: Character = {
      name: "Astrodev Defender",
      life: 1500,
      defense: 100,
      strength: 250
    }

    const validateCharacterMock = jest.fn(() => {
      return true;
    });

    performAttack(attacker, defender, validateCharacterMock as any)

    expect(validateCharacterMock).toHaveReturnedWith(true)

  })
