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

    
    
   

