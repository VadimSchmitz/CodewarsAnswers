/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  div = 1;
  while (x >= 10 * div) {
    div *= 10;
  }

  while (x) {
    let right = x % 10;
    let left = Math.floor(x / div);

    if (left != right) return false;

    x = Math.floor((x % div) / 10);
    div = div / 100;
  }
  return true;
};

isPalindrome(121);
isPalindrome(125521);
