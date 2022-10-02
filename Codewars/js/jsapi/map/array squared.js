function squared(params) {
  console.log(params.map((element) => element * element));
}

const input = [1, 2, 3, 4, 5]; //[ 1, 4, 9, 16, 25]
squared(input);
