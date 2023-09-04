
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
    
    if (!email.value) {
        emailCont.classList.add('error');
        emailError.innerText = "Can’t be empty";
    } else {
        emailCont.classList.remove('error');
        emailError.innerText = ""
    }

    if (!pasSword.value) {
        passwordCont.classList.add('error');
        passwordError.innerText = "Please check again";
    } else {
        passwordCont.classList.remove('error');
        passwordError.innerText = "";
    }

    if (
        email.value &&
        password.value &&
        confirmPassword.value == password.value
      ) {
        const prevUsers = JSON.parse(localStorage.getItem("users"));
    
        if (prevUsers) {
          localStorage.setItem(
            "users",
            JSON.stringify([
              ...prevUsers,
              { email: email.value, password: password.value },
            ])
          );
        } else {
          localStorage.setItem(
            "users",
            JSON.stringify([{ email: email.value, password: password.value }])
          );
        }
    
        button.setAttribute("href", "../../index.html")
      }

});
