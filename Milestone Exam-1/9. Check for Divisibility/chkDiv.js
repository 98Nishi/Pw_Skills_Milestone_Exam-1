// 9. Check for divisibility.
// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
// Use a for loop and continue statdmdnt.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of numbers) {
  if (num % 2 === 0) {
    continue;
  }
  if (num % 3 === 0) {
    console.log(num);
  }
}






