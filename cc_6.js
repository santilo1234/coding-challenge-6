//Task 1- Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
const profit = (sellingPrice - costPrice) * unitsSold;
console.log(`Total Profit: $${profit}`);

}

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);
