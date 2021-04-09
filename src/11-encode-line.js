/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const state = {};
  let result = '';
  const arr = [];
  const split = str.split('');
  for (let i = 0; i < split.length; i++) {
    if (arr[arr.length - 1] !== split[i]) {
      arr.push(split[i]);
    }
  }
  for (let i = 0; i < split.length; i++) {
    for (let j = (i) + 1; j <= (i) + 1; j++) {
      if (split[i] === split[j]) {
        state[split[i]] = (state[split[i]] || 0) + 1;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof state[arr[i]] === 'number') {
      result += `${state[arr[i]] + 1}${arr[i]}`;
    } else {
      result += `${arr[i]}`;
    }
  }
  if (result === '') {
    result = str;
  }
  return result;
}

module.exports = encodeLine;
