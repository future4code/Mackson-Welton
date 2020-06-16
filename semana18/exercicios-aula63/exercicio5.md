### Exercício 5

a)

  test("Teste com valores válidos.", () => {

    const attacker: Character = {
      name: "Astrodev Attacker",
      life: 1500,
      defense: 100,
      strength: 300
    }

    const defender: Character = {
      name: "Astrodev Defender",
      life: 1500,
      defense: 100,
      strength: 250
    }

    const validateCharacterMock = jest.fn(() => {
      return true
    });

    performAttack(attacker, defender, validateCharacterMock as any);

    expect(defender.life).toEqual(1300);
    expect(validateCharacterMock).toHaveBeenCalled();
    expect(validateCharacterMock).toHaveBeenCalledTimes(2);
    expect(validateCharacterMock).toHaveReturnedTimes(2);
  })

b)

test("Teste deve retornar erro.", () => {

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 100,
      strength: 250
    }

    const defender: Character = {
      name: "Astrodev Defender",
      life: 1500,
      defense: 100,
      strength: 250
    }

    expect.assertions(4)

    const validateCharacterMock = jest.fn(() => {
      return false
    });

    try {
      performAttack(attacker, defender, validateCharacterMock as any)
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validateCharacterMock).toHaveBeenCalled();
      expect(validateCharacterMock).toHaveBeenCalledTimes(1);
      expect(validateCharacterMock).toHaveReturnedTimes(1);

    }
  })