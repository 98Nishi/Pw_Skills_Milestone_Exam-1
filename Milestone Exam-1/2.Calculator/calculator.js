// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
// to perform the operation on the two number.

let num1 = 10;
let num2 = 20;
 let operator = "*";
   switch (num1,num2, operator) {
       case "+":
       console.log(num1+num2);
           break;
       case "-":
           console.log(num1-num2);
           break;
       case "*":
           console.log(num1*num2);
           break;
       case "/":
          console.log(num1/num2);
           break;
       default:
          console.log("Invalid operation")
          break;
   }