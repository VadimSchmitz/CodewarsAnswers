//https://www.codewars.com/kata/555eded1ad94b00403000071/javascript

function SeriesSum(n) {
  let bottomValue = 1;
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += 1 / bottomValue;
    bottomValue += 3;
  }
  return res.toFixed(2);
}

// 1 //--> 1 --> "1.00"
// 2 //--> 1 + 1/4 --> "1.25"
// 5 //--> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
