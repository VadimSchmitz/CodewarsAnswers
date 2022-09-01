//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

const rot13 = (message) => {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rot13alpha = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-z]/gi,
    (letter) => rot13alpha[alpha.indexOf(letter)]
  );
};

rot13("test");
