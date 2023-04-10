// Program for Text Highlighting

// get elements by html
const paragraph = document.getElementById("paragraph");


const words = paragraph.textContent.split(" ");

for(let i = 0; i < words.length; i++) {
    if(words[i].length > 8) {
       
        words[i] = "<span style='background: yellow'>" + words[i] + "</span>";
    }
}
paragraph.innerHTML = words.join(" ");