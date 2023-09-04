/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = prices[0];
    let profit=0;
    for(const i of prices){
        if(i < min)min =max= i;
        if(i > max){
            max = i;
            profit = Math.max(profit , max - min);
        }
    }
    return profit;
};