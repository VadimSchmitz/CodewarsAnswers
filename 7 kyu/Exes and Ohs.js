//https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

function XO(str) {
  let regex = /([o,x])/gi;
  a = [...str].filter((item) => (item = regex.exec(item)));
  return a.length % 2 == 0 && a.length < 0 ? true : false;
}

function XO2(str) {
  let arr = str.toLowerCase().split("");
  return (
    arr.filter((element) => element == "x").length ==
    arr.filter((element) => element == "o").length
  );
}

console.log(XO("ooxx")); // => true
console.log(XO("xooxx")); // => false
console.log(XO("ooxxm")); // => true
console.log(XO("zpzpzpp")); // =>when no 'x' and 'o' is present should return true
console.log(XO("zzoo")); // =>  false
