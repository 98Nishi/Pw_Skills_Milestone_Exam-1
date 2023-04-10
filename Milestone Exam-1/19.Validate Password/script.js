// program for Validate Password!

function validate() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const displayValidate = document.getElementById('validate');
 
// condition for checking password length
    if(email.includes("@gmail.com") && password.length >= 8) {
        displayValidate.innerText = "Valid email and password!";
        displayValidate.style.color = "green";
    }
    else {
        displayValidate.innerText = "Invalid email or password!";
        displayValidate.style.color = "red";
    }
};

document.getElementById('btn').addEventListener("click", validate);