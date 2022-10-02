//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

function duplicateCount(text) {
  a = text.toLowerCase().split("").sort();

  count = {};
  a.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });

  return Object.entries(count).filter(([key, value]) => value > 1).length;
}

duplicateCount("abcde"); //0
duplicateCount("indivisibility"); //1
duplicateCount("ABBA"); //2
