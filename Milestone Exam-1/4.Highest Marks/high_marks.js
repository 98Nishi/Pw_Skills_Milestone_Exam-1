// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks


var obj = {
    Golu : 98,
    Goku : 78,
    Ritu : 99,
    Jitu : 88,
    Sinu : 95
  }
  var highest  = -Infinity;
  var name;
  for(let key in obj){
    if(highest <= obj[key]){
      highest = obj[key];
      name = key
    }
  }
  (highest != 0) ? console.log( name + " "+ "has scored" + " "+ highest) : console.log("");