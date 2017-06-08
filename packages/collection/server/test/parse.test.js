import parse from '../parse';
import schema from './fixtures/schema';

test('adds 1 + 2 to equal 3', () => {
  expect(parse(schema)).toEqual({
    ok: true,
  });
});




