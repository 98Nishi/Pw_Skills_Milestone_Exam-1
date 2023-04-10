// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

function calculateTotalBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
    
    const result = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
    
    return result;
  }
  
  
  const costPerDish = 500;
  const numPeople = 4;
  const billInfo = calculateTotalBill(costPerDish, numPeople);
  console.log(`The total bill is Rs. ${billInfo.totalBill}/- and each person has to pay Rs. ${billInfo.billPerPerson}/-`);