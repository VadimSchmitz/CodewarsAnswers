//https://www.codewars.com/kata/5601409514fc93442500010b/javascript

function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length <
    yourPoints
  );
}

betterThanAverage([2, 3], 5); // should return True
