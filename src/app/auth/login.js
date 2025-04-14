var userId = document.getElementById("userId");
var password = document.getElementById("password");
var loginButton = document.getElementById("loginButton");

function Authlogin() {
    var userIdValue = userId.value;
    var passwordValue = password.value;
    
    if (userIdValue === "" || passwordValue === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    setTimeout(function () {
        if (userIdValue === "02548" && passwordValue === "01007001305" || userIdValue === "02547" && passwordValue === "01006990989") {
        alert("This user is not active yet. Please contact the administrator.");
        }
    }, 1000);
    }