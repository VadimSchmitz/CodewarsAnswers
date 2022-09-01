//https://www.codewars.com/kata/58885a7bf06a3d466e0000e3

function pairOfShoes(shoes) {
  let pairs = shoes.reduce(function (acc, cur) {
    acc[cur[1]] = (acc[cur[1]] || 0) + (cur[0] == 1 ? 1 : -1);
    return acc;
  }, {});
  return Object.values(pairs).some((x) => x != 0) ? false : true;
}

// function pairOfShoes(shoes) {
//   const result = shoes.reduce((acc, [side, size]) => {
//     const action = side ? 1 : -1;

//     acc[size] ? (acc[size] += action) : (acc[size] = action);

//     return acc;
//   }, {});

//   return Object.values(result).every((item) => item === 0);
// }

shoes = [
  [0, 21],
  [1, 23],
  [1, 21],
  [0, 23],
];

shoes2 = [
  [0, 21],
  [1, 23],
  [1, 21],
  [1, 23],
];
//the output should be true;

console.log(pairOfShoes(shoes));
console.log(pairOfShoes(shoes2));
