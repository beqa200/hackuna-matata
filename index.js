function validateForm() {
    var email = document.forms["indexVal"]["email"].value;
    var password = document.forms["indexVal"]["password"].value;
    var valid = true; 


    var emailError = "";
    var passwordError = "";

    if (email == "") {
        emailError = "Can't be empty";
        document.forms["indexVal"]["email"].placeholder = "Can't be empty";
        valid = false;

    }

    if (password === "") {
        passwordError = "Please check again"
        document.forms["indexVal"]["email"].placeholder = "Please check again";
        valid = false;
    }


     
    return valid;
}