//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  let correct = "abcdefghijklm".split("");

  u = 0;
  for (const i of s) {
    correct.includes(i) ? null : u++;
  }

  return `${u}/${s.length}`;
}

printerError("aaabbbbhaijjjm"); //"0/14"
printerError("aaaxbbbbyyhwawiwjjjwwm"); //"8/22"
