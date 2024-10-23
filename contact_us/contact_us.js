let inpName = document.querySelector("#inp-name");
let inpEmail = document.querySelector("#inp-email");
let inpSubject = document.querySelector("#inp-subject");
let inpText = document.querySelector("#flow-control");
let submitBtn = document.querySelector("#submit-btn")
let errors = document.querySelectorAll("#error");
function hideError() {
    errors.forEach((error) => {
        error.style.display = "none"; 
    });
}
hideError();
function errorDetection(){
    window.stop();
    hideError();
    isValid1 = (inpName.value === "" || inpName.value.length < 12) ? 0 : 1; 
    isValid2 = (inpEmail.value === "" || inpEmail.value.length < 12) ? 0 : 1; 
    isValid3 = (inpSubject.value === "" || inpSubject.value.length < 12) ? 0 : 1; 
    isValid4 = (inpText.value === "") ? 0 : 1; 
    if (!isValid1 || !isValid2 || !isValid3|| !isValid4) {
        if (!isValid1) {
            errors[0].style.display = "block";
        }
        
        if (!isValid2) {
            errors[1].style.display = "block";
        }
        
        if (!isValid3) {
            errors[2].style.display = "block";
        }
        
        if (!isValid4) {
            errors[3].style.display = "block";
        }
    }
    else{
        window.location.href = "#";
    }
};

submitBtn.addEventListener("click",errorDetection);

