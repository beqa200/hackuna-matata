
let button = document.querySelector(".login-btn");

let email = document.querySelector("#email");
let password = document.querySelector("#pasSword");
let confirmPassword = document.querySelector("#confirmPassword");

let emailCont = document.querySelector("#emailCont");
let passwordCont = document.querySelector("#passwordCont");
let confirmPasswordCont = document.querySelector("#confirmPasswordCont")

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let confirmPasswordError = document.querySelector("#confirmPasswordError")

button.addEventListener('click', function() {
    
    if (email.value === "") {
        emailCont.classList.add('error');
        emailError.innerHTML = "Can’t be empty";
    } else {
        emailCont.classList.remove('error');
    }

    if (pasSword.value === "") {
        passwordCont.classList.add('error');
        passwordError.innerHTML = "Please check again";
    } else {
        passwordCont.classList.remove('error');
    }

    if (confirmPassword.value === "") {
        confirmPasswordCont.classList.add('error');
        confirmPasswordError.innerHTML = "gela";
    } else {
        confirmPasswordCont.classList.remove('error');
    }

});
