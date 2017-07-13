import toPlain from './fixtures/schema';
test('adds 1 + 2 to equal 3', function () {
    var input = 'Hallo';
    var output = 'Hallo';
    expect(toPlain(input)).toEqual({
        ok: true,
    });
});
//# sourceMappingURL=ast-to-plain.test.js.map