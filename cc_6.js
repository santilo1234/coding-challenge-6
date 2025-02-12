//Task 1- Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
const profit = (sellingPrice - costPrice) * unitsSold;
console.log(`Total Profit: $${profit}`);

}

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);


//Task 2- Sales Tax Computation

const calculateSalesTax = function(amount, taxRate){
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
    
    };
    calculateSalesTax(100, 0.07);
    calculateSalesTax(500,0.1);



 //Task 3- Employee Bonus Calculation
 const calculateBonus = (salary, performanceRating) => {
    if (performanceRating === "Excellent") {
        Bonus = salary * .20
    } else if (performanceRating === "Good") {
        bonus = salary * .10
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05
    };
    console.log(`Bonus: $${bonus}`);

};

//Task 4- Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount=0) {
    let cost;
    if (plan === "Basic") {
        cost = 10;
    } else if (plan === "Premium") {
        cost = 20;
    } else if (plan === "Enterprise") {
        cost = 30;
    };
    let totalCost = (cost * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
    return totalCost;
   
};


calculateSubscriptionCost("Basic", 6, 10);
calculateSubscriptionCost("Premium", 12, 0);


//Task 5- Currency Conversion
function convertCurrency(amount, exchangeRate) {
if (amount < 0 || exchangeRate <= 0) {
console.log("Error: Amount and exchange rate must be greater than 0");

return;

}

const convertedAmount = amount * exchangeRate;
console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
}
convertCurrency(100, 1.1);
convertCurrency(-100, 1.1);
convertCurrency(250, 0.85);

//Task 6- Bulk Orders Discount
function applyDiscount(orders, discountedFunction) {
!if (!Array.isArray(orders|| orders.some(order=> order<0)) {
    console.log("Error: Orders must be an array of positive numbers");
    return;
}

let orders = [200, 500, 600, 900, 1000];
applyDiscount(orders, order=>);{
    if(order > 500) return order * 0.9;
    return order;  
}



    
   

