let signupBtn = document.querySelector("#signup-btn");
let signinBtn = document.querySelector("#signin-btn");
let userNameBox = document.querySelector("#input-username");
let emailBox = document.querySelector("#input-email");
let passBox = document.querySelector("#input-pass");
let errorBox = document.querySelectorAll(".error");
let heading = document.querySelector("h1");
let underline = document.querySelector(".underline");
let userNameField = document.querySelector(".username-field");
let forgetPass = document.querySelector("#forget-pass");
let isUserNameDisplay = 1;
let checkBox = document.querySelector("#remember");

function hideError() {
    errorBox.forEach((error) => {
        error.style.display = "none"; 
    });
}

signinBtn.addEventListener("click",()=> {
    heading.innerText = "Sign In";
    underline.style.transform = "translateX(40px)";
    userNameField.style.display = "none";
    signinBtn.style.backgroundColor = "#669bbc";
    signupBtn.style.backgroundColor = "#fff";
    forgetPass.innerText = "Forget Password ?"
    forgetPass.style.cursor = "pointer";
    forgetPass.style.textDecoration = "underline";
    isUserNameDisplay = 0;
    checkBox.style.display = "none";
    hideError();
})

signupBtn.addEventListener("click",()=> {
    heading.innerText = "Sign Up";
    underline.style.transform = "translateX(0px)";
    userNameField.style.display = "block";
    signinBtn.style.backgroundColor = "#fff";
    signupBtn.style.backgroundColor = "#669bbc";
    forgetPass.innerText = "Remember Me"
    forgetPass.style.textDecoration = "none";
    checkBox.style.display = "inline";
    errorBox.innerText = "";
    isUserNameDisplay = 1;
    hideError();
})

function errorDetection() {
    hideError();
    let isValid1 = userNameBox.value !== "";
    let isValid2 = emailBox.value !== "";
    let isValid3 = passBox.value !== "";
    
    if (!isValid1 || !isValid2 || !isValid3) {
        if (!isValid1) {
            userNameBox.style.border = "1px solid red";
            errorBox[0].style.display = "block"; 

        }
        if (!isValid2) {
            emailBox.style.border = "1px solid red";
            errorBox[1].style.display = "block"; 
        }
        if (!isValid3) {
            passBox.style.border = "1px solid red";
            errorBox[2].style.display = "block"; 
        }
    } else {
        localStorage.setItem("username", userNameBox.value);
        window.location.href = "../main page/mainpage.html"; 
    }
}

signupBtn.addEventListener("dblclick", errorDetection);
signinBtn.addEventListener("dblclick", errorDetection);
