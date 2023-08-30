function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var valid = true; 


    var emailError = "";
    var passwordError = "";

    if (email == "") {
        emailError = "Can't be empty";
        valid = false;

    }

    if (password === "") {
        passwordError = "Please check again"
        valid = false;
    }
     

    document.getElementById("email-error").textContent = emailError;
    document.getElementById("password-error").textContent = passwordError;



    return valid;
}