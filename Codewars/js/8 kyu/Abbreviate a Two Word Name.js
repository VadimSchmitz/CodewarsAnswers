//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  split = name.toUpperCase().split(" ");
  return `${split[0][0]}.${split[1][0]}`;
}

// Sam Harris => S.H
// patrick feeney => P.F

abbrevName("Sam Harris");
