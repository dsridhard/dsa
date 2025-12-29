// Best Time to buy and sell stock
// Solution 
// find the minimum value of and maximum value of the array and subtract them

// logic to find the minimum value of the array


function maxProfit(prices) {
    let minSoFar = prices[0]  //minmum value of the array 
    let res = 0     //result 
    for (let i = 0; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i])
        res = Math.max(res, prices[i] - minSoFar)
    }
    return res
}

let prices = [7, 10, 1, 3, 6, 9, 2]
console.log(maxProfit(prices))