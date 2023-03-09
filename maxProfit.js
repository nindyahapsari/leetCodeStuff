/*
link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/911930071/?envType=study-plan&id=data-structure-i
level: easy
*/

var maxProfit = function(prices) {
    let maxProfit = 0
    let lp = 0
    let rp = 1
    while(rp < prices.length){
        if (prices[lp] < prices[rp]){
            let profit = prices[rp] - prices[lp]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            lp = rp
        }
        rp++
    }


    return maxProfit
    
};
