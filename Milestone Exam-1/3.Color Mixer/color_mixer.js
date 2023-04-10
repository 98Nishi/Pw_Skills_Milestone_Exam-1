// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria"
// L If color1 is "red" and color2 is "blue" or vice versa, print "purple"P
//  If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
//  If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"P
//  If any other combination of colors is input, the program should print "Invalid color combination


let color1 = "Red";
let color2 = "Yellow";
let new_color = color1 + color2;

switch(new_color){
  case "RedBlue":
    console.log("Purple");
    break;
  case "RedYellow":
    console.log("Orange");
    break;
  case "BlueYellow":
    console.log("Green");
    break;
  default:
    console.log("Invalid Color Combination");
}