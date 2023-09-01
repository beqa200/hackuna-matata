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

button.addEventListener('click', function () {

    if (!email.value) {
        emailCont.classList.add('error');
        emailError.innerText = "Can’t be empty";
    } else {
        emailCont.classList.remove('error');
        emailError.innerText = "";
    }

    if (!password.value) {
     https://github.com/beqa200/hackuna-matata/pull/38/conflict?name=pages%252FRegister%252Fregister.js&ancestor_oid=675179714a1bef76574b66ea741eabf6bde98690&base_oid=3d57869db9c78432c5a403b99dfbe0e58df1b6c3&head_oid=e26b13e64bf58a43b2f154c8a4ae947e73890031   passwordCont.classList.add('error');
        passwordError.innerText = "Please check again";
    } else {
        passwordCont.classList.remove('error');
        passwordError.innerText = "";
    }


    if (email.value && password.value && confirmPassword.value == password.value) {
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

email.addEventListener('input', function () {

    emailCont.classList.remove('error');
    emailError.innerText = "";

})

password.addEventListener('input', function () {

    passwordCont.classList.remove('error');
    passwordError.innerText = "";

})

