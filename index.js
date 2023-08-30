let button = document.querySelector(".login-btn");

let email = document.querySelector("#email");
let password = document.querySelector("#pasSword");

let emailCont = document.querySelector("#emailCont");
let passwordCont = document.querySelector("#passwordCont");

let passwordError = document.querySelector("#passwordError")



button.addEventListener('click', function() {

    if (email.value === "") {
        console.log("email Error")
        emailCont.style.border = '1px solid red';
    } 
   else {
    emailCont.classList.remove('error');
}

    if (pasSword.value === "") {
        console.log ("pass Error")
        passwordCont.style.border = '1px solid red';
    } 
    else {
        passwordCont.classList.remove('error');

    }
    if (confirmPassword.value === "") {
        confirmPasswordCont.classList.add('error');
    } else {
        confirmPasswordCont.classList.remove('error');
    }

});
   
