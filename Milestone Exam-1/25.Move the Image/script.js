// program for moving Image

const image = document.querySelector("#image");
var a = 0;
var b = 0;
function moveImg(aOffset, bOffset) {
  a += aOffset;
  b += bOffset;
  image.style.transform = `translate(${a}px, ${b}px)`;
}

// Adding eventlistener
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      moveImg(0, -10); 
      break;
    case "ArrowDown":
      moveImg(0, 10); 
      break;
    case "ArrowLeft":
      moveImg(-10, 0); 
      break;
    case "ArrowRight":
      moveImg(10, 0); 
      break;
  }
});

