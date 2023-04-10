// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changes.

var user_name = "krishnaRadhe21";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chk_letter = user_name.charAt(0).toUpperCase()+user_name.slice(1).toLowerCase();

(user_name[0] != uppercase) ? console.log(chk_letter) : console.log(user_name);