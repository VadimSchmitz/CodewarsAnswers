//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript

function findNeedle(haystack) {
  // your code here

  return `found the needle at position ${haystack.indexOf("needle")}`;
}

arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]; //--> "found the needle at position 5"
findNeedle(arr);
