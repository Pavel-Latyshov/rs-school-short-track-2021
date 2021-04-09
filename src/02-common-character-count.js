/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(firstStr, secStr) {
  const arr = firstStr.split('').sort();
  const array = secStr.split('').sort();
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[i] === array[j]) {
        arr.splice(i, 1);
        array.splice(j, 1);
        result += 1;
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[i] === array[j]) {
        arr.splice(i, 1);
        array.splice(j, 1);
        result += 1;
      }
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
