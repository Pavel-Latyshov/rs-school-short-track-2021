/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const length = String(n).split('');
  let str = String(n).split('');
  const result = [];
  for (let i = 0; i < length.length; i++) {
    str = String(n).split('');
    str.splice(i, 1);
    result.push(Number(str.join('')));
  }
  result.sort((a, b) => a - b);
  return result[result.length - 1];
}

module.exports = deleteDigit;
