//https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

function count(string) {
  return [...string].reduce((acc, curr) => {
    return acc[curr] ? acc[curr]++ : (acc[curr] = 1), acc;
  }, {});
}

console.log(count("aba")); // => {2: 5, 4: 1, 5: 3, 9: 1}

count("aba"); //{'a': 2, 'b': 1}.
