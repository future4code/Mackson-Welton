### Exercício 4

 a)
  test("Array allowed brazilians é menor do que 2 e maior do que 0", () => {
    const cassino: Casino = { name: "Labenu", location: LOCATION.BRAZIL };
    const user: User[] = [
      {
        name: "Mackson", age: 29, nacionality: NACIONALITY.BRAZILIAN
      }
    ];

    const result = verifyAge(cassino, user);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  })

 b)
  test("Array unallowed americans é igual a 0", () => {
    const cassino: Casino = { name: "Labenu", location: LOCATION.BRAZIL };
    const user: User[] = [
      {
        name: "Mackson", age: 29, nacionality: NACIONALITY.AMERICAN
      }
    ];

    const result = verifyAge(cassino, user);
    expect(result.americans.unallowed.length).toBe(0);
  })

  c)
  test("Contém 1 nome de usuário em unallowed", () => {
    const cassino: Casino = { name: "Future4", location: LOCATION.EUA };
    const user: User[] = [
      {
        name: "Mackson", age: 19, nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "Astrodev", age: 19, nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "John Smith", age: 19, nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "William David", age: 19, nacionality: NACIONALITY.AMERICAN
      }
    ];

    const result = verifyAge(cassino, user);
    expect(result.americans.unallowed).toContain("John Smith");
  })

 d)
  test("Array unallowed brazilians maior do que 1 e americans allowed menor do que 1 e igual a 2", () => {
    const cassino: Casino = { name: "Future4", location: LOCATION.EUA };
    const user: User[] = [
      {
        name: "Mackson", age: 19, nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "Astrodev", age: 19, nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "John Smith", age: 21, nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "William David", age: 21, nacionality: NACIONALITY.AMERICAN
      }
    ];
    const result = verifyAge(cassino, user);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);

  })