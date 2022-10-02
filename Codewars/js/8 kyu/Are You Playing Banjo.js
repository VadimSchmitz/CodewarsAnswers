//https://www.codewars.com/kata/53af2b8861023f1d88000832/javascript

function areYouPlayingBanjo(name) {
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("Reanor"));

// name + " plays banjo"
// name + " does not play banjo"
