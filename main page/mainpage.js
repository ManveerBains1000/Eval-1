function checkLoginState() {
    const username = localStorage.getItem("username");
    const loginButton = document.getElementById("login-button");
    const profileInfo = document.getElementById("profile-info");
    const usernameDisplay = document.getElementById("username");
    const displayName = document.getElementById("username1");
    if (username) {
        loginButton.style.display = "none"; 
        profileInfo.style.display = "flex"; 
        displayName.innerText = username; 
        
    } else {
        loginButton.style.display = "block"; 
        profileInfo.style.display = "none";
    }
}

function logout() {
    localStorage.removeItem("username"); 
    window.location.href = "../login_page/login_form.html";
}

// Check login state on page load
document.addEventListener("DOMContentLoaded", checkLoginState);

