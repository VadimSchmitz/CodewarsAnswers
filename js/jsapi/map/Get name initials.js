function initials(params) {
  return params
    .split(" ")
    .map((item) => item[0])
    .join("");
}

const input = "George Raymond Richard Martin"; //  'GRRM'
console.log(initials(input));
