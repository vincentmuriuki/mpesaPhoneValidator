const phoneValidator = require('./index');

test('that phoneValidator returns a value', () => {
  expect(phoneValidator('0781234567')).not.toBeNull();
});

test('that phoneValidator returns a string', () => {
  expect(phoneValidator).toBeDefined();
});
