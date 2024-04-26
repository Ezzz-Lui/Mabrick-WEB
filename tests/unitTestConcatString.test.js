// concatStrings.test.js
const concatStrings = require('../src/unitTestConcatString.js');

test('concatena dos cadenas correctamente', () => {
  const result = concatStrings("Unit Testing", "for Mabrick Website hosted on Vercel");
  expect(result).toBe("Unit Testing for Mabrick Website hosted on Vercel");
});
