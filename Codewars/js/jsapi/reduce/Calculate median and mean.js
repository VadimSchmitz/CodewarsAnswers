function medianAndMean(params) {
  mean = params.reduce((a, b) => a + b) / params.length;

  sorted = params.sort();
  median = sorted[params.length / 2] + sorted[params.length / 2 - 1] / 2;

  return { mean, median };
}

const input = [12, 46, 32, 64]; //  { mean: 38.5, median: 62 }

console.log(medianAndMean(input));
