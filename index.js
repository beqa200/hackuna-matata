let emailCont = document.querySelector("#emailCont");
let passwordCont = document.querySelector("#passwordCont");
let emailError = document.querySelector(".email-p");
let passwordError = document.querySelector("#password-p");
let button = document.querySelector("#login");
let email = document.querySelector("#email");
let pasSword = document.querySelector("#pasSword");

let addressE = document.querySelector("#addressE");
let passWord = document.querySelector("#passWord");


button.addEventListener('click', function() {

    if (email.value === "") {
        emailCont.classList.add('error');
        emailError.innerHTML = "Can’t be empty";
        addressE.style.color = "#FF3939";
    } else {
        emailCont.classList.remove('error');
        addressE.style.color = "#333333";
    }

    if (pasSword.value === "") {
        passwordCont.classList.add('error');
        passwordError.innerHTML = "Please check again";
        passWord.style.color = "#FF3939";
    } else {
        passwordCont.classList.remove('error');
        passWord.style.color = "#333333";
    }

    if(email.value && pasSword.value) {
        const users = JSON.parse(localStorage.getItem("users"));
        users.map((item) => {
            if(item.email == email.value && item.password == pasSword.value) {

                button.setAttribute("href", "./pages/AddLink/addLink.html")
            }
        })
    }

});

   
