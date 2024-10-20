let signupBtn = document.querySelector("#signup-btn")
let signinBtn = document.querySelector("#signin-btn")
let heading = document.querySelector("h1");
let underline = document.querySelector(".underline");
let userNameField = document.querySelector(".username-field");
let forgetPass = document.querySelector("#forget-pass");
let insideSignin = false;
let insideSignUp = true;
let errorBox = document.querySelectorAll(".error");
let isUserNameDisplay = 1;
function hideError(){
errorBox.forEach((error)=>{
    error.classList.add("errorDisplay");
    error.classList.remove("error");
})
}
hideError();
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
let emailBox = document.querySelector("#input-email");
let userNameBox = document.querySelector("#input-username");
let PassBox = document.querySelector("#input-pass");
function errorDetection(){
    let isValid1 = userNameBox.value == "" || userNameBox.value.length < 12 ? false : true;
    let isValid2 = emailBox.value == "" || emailBox.value.length < 12 ? false : true;
    let isValid3 = PassBox.value == "" || PassBox.value.length < 12 ? false : true;
    console.log(isUserNameDisplay);
    if (!isValid1 && !isValid2 && !isValid3){
        errorBox.forEach((error)=>{
            error.classList.remove("errorDisplay");
            error.classList.add("error");
        })
    } 
    else if (!isValid1 && isUserNameDisplay){
        errorBox[0].classList.add("error");
        errorBox[0].classList.remove("errorDisplay");
    }
    else if(!isValid2){
        errorBox[1].classList.add("error");
        errorBox[1].classList.remove("errorDisplay");
    }
    else if(!isValid3){
        errorBox[2].classList.add("error");
        errorBox[2].classList.remove("errorDisplay");
    }
    else{
        window.location.href = "../main page/mainpage.html";
    }

}


signupBtn.addEventListener("dblclick",errorDetection);
signinBtn.addEventListener("dblclick",errorDetection);
