/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  l = 0;
  r = 1;
  maxP = 0;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
};

prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);
