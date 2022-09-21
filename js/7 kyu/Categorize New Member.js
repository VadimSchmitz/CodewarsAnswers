//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data) {
  return data.map((person) =>
    person[0] >= 55 && person[1] > 7 ? "Senior" : "Open"
  );
}

input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"];

openOrSenior(input);
//sentior age >=55 && handicap >=7
