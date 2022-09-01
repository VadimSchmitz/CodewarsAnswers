//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/javascript

function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  for (let waittime of customers) {
    const lowestTill = tills.indexOf(Math.min(...tills));
    tills[lowestTill] += waittime;
  }
  return Math.max(...tills);
}

//logical steps 
// fill array of tills initiated to 0
// for each customer take the waiting time as waittime
// find the index of the lowest till.Array
// add the waittime to the lowest till
// return the highest amount within the array since it is the max time

// queueTime([], 1); //, 0;
// queueTime([1, 2, 3, 4], 1); //, 10;
queueTime([2, 2, 3, 3, 4, 4], 2); //, 9;
// queueTime([1, 2, 3, 4, 5], 100); //, 5;
