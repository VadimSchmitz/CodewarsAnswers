//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    h = h * bounce;
    while (h > window) {
      count += 2;
      h = h * bounce;
    }
    return count;
  }
  return -1;
}

console.log(bouncingBall(3, 0.66, 1.5)); // result is 3 3
// bouncingBall(30.0, 0.66, 1.5); // result is 15 8
bouncingBall(4, 0.25, 1); // result is 1 1
