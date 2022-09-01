//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
    let arr = numbers.slice(0)
    let smallest = numbers.indexOf(Math.min(...numbers))
    arr.splice(smallest, 1);
    return arr
   }

input = [1, 2, 3, 4, 5]; // output= [2,3,4,5]
input2 = [5, 3, 2, 1, 4]; // output = [5,3,2,4]
input3 = [2, 2, 1, 2, 1]; // output = [2,2,2,1]

console.log(removeSmallest(input));
