function ageDiffYoungToOld(params) {
  a = params.map((item) => item.age);
  max = Math.max(...a);
  min = Math.min(...a);
  return [max, min, max - min];
}

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

console.log(ageDiffYoungToOld(input));
//  [13, 67, 54]
