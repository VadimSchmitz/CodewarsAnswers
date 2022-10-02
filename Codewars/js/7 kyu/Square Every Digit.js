//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((num) => num * num)
      .join("")
  );
}

console.log(
  squareDigits(9119) // >811181
);
