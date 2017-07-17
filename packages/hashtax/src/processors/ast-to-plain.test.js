import toPlain from './fixtures/schema';

test('adds 1 + 2 to equal 3', () => {
  const input = 'Hallo';
  const output = 'Hallo';
  expect(toPlain(input)).toEqual({
    ok: true,
  });
});
