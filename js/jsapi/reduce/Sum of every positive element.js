function sumPos(params) {
  a = params.filter((element) => element > 1).reduce((a, b) => a + b);
  console.log(a);
}

const input = [1, -4, 12, 0, -3, 29, -150]; //41
sumPos(input);
