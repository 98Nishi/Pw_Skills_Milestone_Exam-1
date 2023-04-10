// program for change heading

function toggleHeading() {
    const heading = document.getElementById("heading");
    if (heading.textContent === "The most affordable learning Platform!!!") {
      heading.textContent = "PW SKILLS";
    } 
    else {
      heading.textContent = "The most affordable learning Platform!!!";
    }
  };