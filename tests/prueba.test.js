const { suma, resta } = require('../src/prueba');

test('suma 1 + 2 = 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('resta 5 - 2 = 3', () => {
  expect(resta(5, 2)).toBe(3);
});
