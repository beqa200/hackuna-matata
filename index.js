function validateForm() {
    var email = document.forms["indexVal"]["email"].value;
    var password = document.forms["indexVal"]["password"].value;
    var valid = true; 

    if (email == "") {
        document.forms["indexVal"]["email"].classList.add("error");
        document.getElementById("email-p").classList.add("error-label");
        document.forms["indexVal"]["email"].placeholder = "Can't be empty";
        valid = false;
    } else {
        document.forms["indexVal"]["email"].classList.remove("error");
        document.getElementById("email-p").classList.remove("error-label");
        document.forms["indexVal"]["email"].placeholder = "Email address";
    }

    if (password == "") {
        document.forms["indexVal"]["password"].classList.add("error");
        document.getElementById("password-p").classList.add("error-label");
        document.forms["indexVal"]["password"].placeholder = "Please check again";
        valid = false;
    } else {
        document.forms["indexVal"]["password"].classList.remove("error");
        document.getElementById("password-p").classList.remove("error-label");
        document.forms["indexVal"]["password"].placeholder = "Password";
    }

    return valid;