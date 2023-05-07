var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");

function validateEmail() {
    emailLabel.style.bottom = "45px";

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email";
        emailField.style.borderBottomColor = "red";
        emailError.style.top = "120%"
        return false;
    }

    emailError.innerHTML = "";
    emailField.style.borderBottomColor = "green";
    emailError.style.top = "100%"
    return true;
}