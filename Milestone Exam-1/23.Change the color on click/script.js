// program for change background color

// getting elements from html
const button = document.getElementById("button");
const randomColor =  () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};

// function for change random color background

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}

button.addEventListener("click", changeRandomColor);
