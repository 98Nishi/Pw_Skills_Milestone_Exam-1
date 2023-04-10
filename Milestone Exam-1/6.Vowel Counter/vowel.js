// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
// counted.

var person_name = "aryabhata";
var count = 0;
for(let i =0; i<person_name.length; i++){
  if(person_name[i] == "a" || person_name[i] == "e" || person_name[i] == "i" || person_name[i] == "o" || person_name[i] == "u"){
    count++;
  }
}
    count = count;
    console.log(count);