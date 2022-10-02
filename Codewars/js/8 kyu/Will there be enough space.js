//https://www.codewars.com/kata/5875b200d520904a04000003/javascript

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

console.log(enough(10, 5, 5)); //--> 0 # He can fit all 5 passengers
console.log(enough(100, 60, 50)); //--> 10 # He can't fit 10 of the 50 waiting
console.log(enough(50, 3, 59)); //--> 10 # He can't fit 10 of the 50 waiting
