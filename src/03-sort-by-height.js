/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const arr = [];
  const newArr = [];
  const el = -1;
  let id = array.indexOf(el);
  while (id !== -1) {
    arr.push(id);
    id = array.indexOf(el, id + 1);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      newArr.push(array[i]);
    }
  }
  newArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    newArr.splice(arr[i], 0, -1);
  }
  return newArr;
}

module.exports = sortByHeight;
