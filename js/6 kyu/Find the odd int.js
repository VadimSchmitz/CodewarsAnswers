//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(a) {
  let n;
  a.forEach((element) => {
    a.map((e, i) => (e === element ? i : "")).filter(String).length % 2 > 0
      ? (n = element)
      : null;
  });
  return n;
}

a = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]; //5
findOdd(a);

// console.log(findOdd(a));
