/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  let flag = false;
  let domain = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[arr.length - i] === '@') {
      flag = true;
    }
    if (flag === false) {
      domain += arr[arr.length - i];
    }
  }
  return domain.split('').reverse().join('');
}

module.exports = getEmailDomain;
