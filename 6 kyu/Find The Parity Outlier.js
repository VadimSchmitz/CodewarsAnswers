//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

function isOdd(num) { return num % 2;};

function findOutlier(integers){
    let even = integers.filter(i => !isOdd(i));
    let odd = integers.filter(i => isOdd(i));

    return even.length > odd.length ? odd[0]: even[0];

  }

//   findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
  findOutlier([160, 3, 1719, 19, 11, 13, -21])