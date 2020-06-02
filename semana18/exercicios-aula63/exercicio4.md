### Exercício 4

a) Deve-se criar um mock da função performAttack, pois ele recebe injeção de dependências.

b)

test("Mock que represente a saída de sucesso", () => {
  const validateCharacterMock = jest.fn(() => {
    return true
  });
});

C)

test("Mock que representa a saída de erro/falha", () => {
  const validateCharacterMock = jest.fn(() => {
    return false
  });
});