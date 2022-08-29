//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

nb_year(1000, 2, 50, 1200); // -> 3

nb_year(1500, 5, 100, 5000); // -> 15
// nb_year(1500000, 2.5, 10000, 2000000); //-> 10
