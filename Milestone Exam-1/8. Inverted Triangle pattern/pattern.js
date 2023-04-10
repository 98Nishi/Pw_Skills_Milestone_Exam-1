// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.
// Invdrtdd right-angldd pattdrn:
// If i=6

for(let i=6; i>=1; i--){
    let str = "";
    for(let j =i; j>=1; j--){
      str += "*";
    }
    console.log(str);
  }