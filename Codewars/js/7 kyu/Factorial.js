//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n) {
  if (n > 12 || n < 0) throw new RangeError("Range must be between 0 and 12");
  if (n === 0) return 1;

  return eval(
    Array.from({ length: n }, (_, i) => i + 1)
      .reverse()
      .join("*")
  );
}

console.log(factorial(8));
