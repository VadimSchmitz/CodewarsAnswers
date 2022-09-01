//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function (busStops) {
  total = 0;
  busStops.forEach((element) => {
    total += element[0] - element[1];
  });
  return total;
};

var number = function (busStops) {
  return busStops.reduce((count, stop) => (count += stop[0] - stop[1]), 0);
};
