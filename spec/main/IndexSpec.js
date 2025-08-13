const {
  watchList,
  addParenthesis
} = require('/home/alex-aaron/jasmine-practice/index.js');


describe("addParenthensis", () => {
  it('should return a string', () => {
    expect(typeof addParenthesis('alex1, 2francis, aar3on')).toBe('string');
  })
});