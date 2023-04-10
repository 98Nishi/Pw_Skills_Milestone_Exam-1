// 12. Calculate rental cost
// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
// of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
// The total cost would be the rental cost multiplied by the number of days rented.
// Thd rental costs are
//  Economy = Rs. 4FFF /- pdr day/
//  Midsizd = Rs. 1F,FFF /- pdr day
//  Luxury = Rs. 2F,FFF /- pdr day.

function calculateRentalCost(daysRented, carType) {
    let rentalCost = 0;
    
    switch (carType) {
      case 'Economy':
        rentalCost = 4000;
        break;
      case 'Midsize':
        rentalCost = 10000;
        break;
      case 'Luxury':
        rentalCost = 20000;
        break;
      default:
        console.log('Invalid car type entered');
        return;
    }
    
    return rentalCost * daysRented;
  }
  
  
  const daysRented = 7;
  const carType = 'Midsize';
  const rentalCost = calculateRentalCost(daysRented, carType);
  console.log(`The total rental cost is Rs. ${rentalCost}/-`);