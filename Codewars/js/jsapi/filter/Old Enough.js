function ofAge(arr) {
  return arr.filter((item) => item.age > 18);
}
// test
console.log(
  ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
