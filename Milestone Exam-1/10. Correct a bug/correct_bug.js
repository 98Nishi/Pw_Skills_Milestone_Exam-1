// 10. Correct a bug 
// You are working on an e-commerce website where customers can add items to their cart. The cartstores the quantity of each item that the customer wants to purchase in an array of numbers. However, the website is currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart array to correct the bug.

function doubleCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
  
  const cart = [1, 2, 3, 4];
  const updatedCart = doubleCartQuantities(cart);
  console.log(updatedCart); 