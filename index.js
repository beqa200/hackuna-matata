function validateForm() {
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var valid = true; 
    
    if (email == "") {
        document.forms["myForm"]["email"].classList.add("error");
        document.getElementById("email-label").classList.add("error-label");
        document.forms["myForm"]["email"].placeholder = "Can't be empty";
        valid = false;
    } else {
        document.forms["myForm"]["email"].classList.remove("error");
        document.getElementById("email-label").classList.remove("error-label");
        document.forms["myForm"]["email"].placeholder = "Email";
    }

    if (password == "") {
        document.forms["myForm"]["password"].classList.add("error");
        document.getElementById("password-label").classList.add("error-label");
        document.forms["myForm"]["password"].placeholder = "Please check again";
        valid = false;
    } else {
        document.forms["myForm"]["password"].classList.remove("error");
        document.getElementById("password-label").classList.remove("error-label");
        document.forms["myForm"]["password"].placeholder = "Password";
    }

    return valid;
}