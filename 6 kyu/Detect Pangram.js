//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function isPangram(string){  
      return alphabet.filter(l => !string.toLowerCase().split("").includes(l)).length<1
  }

  console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))