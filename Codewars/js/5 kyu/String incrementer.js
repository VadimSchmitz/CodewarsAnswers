//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(string) {
  let number = string.match(/\d+/) === null ? 0 : string.match(/\d+/)[0];
  let numberLength = number.length;
  number = (parseInt(number) + 1).toString();

  while (number.length < numberLength) {
    number = "0" + number;
  }
  return string.replace(/\d+/g, "").concat(number);
}

incrementString("foobar23");
// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// incrementString("foo001");

// foo099 -> foo100
