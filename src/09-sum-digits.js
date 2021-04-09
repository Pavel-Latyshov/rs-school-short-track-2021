/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = [];
  const secondNum = [];
  let result;
  const str = String(n).split('');
  for (let i = 0; i < str.length; i++) {
    num.push(Number(str[i]));
  }
  result = num.reduce((a, b) => a + b);
  if (result <= 9) {
    return result;
  } if (result > 9) {
    const newStr = String(result).split('');
    for (let i = 0; i < newStr.length; i++) {
      secondNum.push(Number(newStr[i]));
      result = secondNum.reduce((a, b) => a + b);
    }
  }
  return result;
}

module.exports = getSumOfDigits;
