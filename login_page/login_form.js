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
let insideSignin = false;
let insideSignUp = true;
let isUserNameDisplay = 1;


function hideError() {
    errorBox.forEach((error) => {
        // error.classList.add("errorDisplay");
        // error.classList.remove("error");
        error.style.display = "none"; // Use style.display for hiding
    });
}

signinBtn.addEventListener("click",()=> {
    heading.innerText = "Sign In";
    underline.style.transform = "translateX(40px)";
    userNameField.style.display = "none";
    signinBtn.style.backgroundColor = "#669bbc";
    signupBtn.style.backgroundColor = "#fff";
    forgetPass.innerText = "Forget Password"
    insideSignin = true;
    insideSignUp = false;
    isUserNameDisplay = 0;
    hideError();
})

signupBtn.addEventListener("click",()=> {
    heading.innerText = "Sign Up";
    underline.style.transform = "translateX(0px)";
    userNameField.style.display = "block";
    signinBtn.style.backgroundColor = "#fff";
    signupBtn.style.backgroundColor = "#669bbc";
    forgetPass.innerText = "Remember Me"
    errorBox.innerText = "";
    insideSignin = false;
    isUserNameDisplay = 1;
    insideSignUp = true;
    hideError();
})

function errorDetection() {
    hideError();
    let isValid1 = userNameBox.value !== "";
    let isValid2 = emailBox.value !== "";
    let isValid3 = passBox.value !== "";
    
    if (!isValid1 || !isValid2 || !isValid3) {
        if (!isValid1) {
            errorBox[0].style.display = "block"; // Show error
        }
        if (!isValid2) {
            errorBox[1].style.display = "block"; // Show error
        }
        if (!isValid3) {
            errorBox[2].style.display = "block"; // Show error
        }
    } else {
        
        localStorage.setItem("username", userNameBox.value);
        window.location.href = "../main page/mainpage.html";
    }
}

signupBtn.addEventListener("dblclick", errorDetection);
signinBtn.addEventListener("dblclick", errorDetection);
