/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const nArr = [];
  const dns = [''];
  const state = {};
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    nArr.push(arr[i].split('.'));
  }
  for (let i = 0; i < nArr.length; i++) {
    nArr[i].sort();
  }
  for (let i = 0; i < nArr.length; i++) {
    for (let j = 0; j < nArr[i].length; j++) {
      nArr[i][j] = `.${nArr[i][j]}`;
    }
  }
  for (let i = 0; i < nArr.length; i++) {
    for (let j = 0; j < nArr[i].length; j++) {
      dns.push(dns[j] + nArr[i][j]);
    }
  }
  for (let i = 1; i < dns.length; i++) {
    state[dns[i]] = (state[dns[i]] || 0) + 1;
  }
  return state;
}

module.exports = getDNSStats;
