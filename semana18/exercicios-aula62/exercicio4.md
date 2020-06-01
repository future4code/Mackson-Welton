### Exercício 4

 a)
  test("Array allowed brazilians com 1 brasileiro", () => {
    const cassino: Casino = { name: "Labenu", location: LOCATION.BRAZIL };
    const user: User[] = [
      {
        name: "Mackson", age: 29, nacionality: NACIONALITY.BRAZILIAN
      }
    ];

    const result = verifyAge(cassino, user);
    expect(result.brazilians.allowed).toEqual(["Mackson"]);
  })

b)
  test("1 americano no array allowed americans", () => {
    const cassino: Casino = { name: "Future4", location: LOCATION.BRAZIL };
    const user: User[] = [
      {
        name: "Mackson", age: 18, nacionality: NACIONALITY.AMERICAN
      }
    ];

    const result = verifyAge(cassino, user);
    expect(result.americans.allowed).toEqual(["Mackson"]);
  })

 c)
  test("Array unallowed brazilians 2 e americans 2", () => {
    const cassino: Casino = { name: "Future4", location: LOCATION.EUA };
    const user: User[] = [
      {
        name: "Mackson", age: 19, nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "Astrodev", age: 19, nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "John Smith", age: 19, nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "William David", age: 19, nacionality: NACIONALITY.AMERICAN
      }
    ];

    const result = verifyAge(cassino, user);
    expect(result.brazilians.unallowed).toEqual(["Mackson", "Astrodev"]);
    expect(result.americans.unallowed).toEqual(["John Smith", "William David"]);
  })

  d)

  test("Array unallowed brazilians com 2 brasileiros e allowed americans com 2 americanos", () => {
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
    expect(result.brazilians.unallowed).toEqual(["Mackson", "Astrodev"]);
    expect(result.americans.allowed).toEqual(["John Smith", "William David"]);
  })