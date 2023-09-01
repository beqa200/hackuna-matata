const nameInput = document.getElementById("name");
const lastName = document.getElementById("lastname");
const eMailInput = document.getElementById("Email");
const nameMirror = document.getElementById("mirror-name");
const lastNameMirror = document.getElementById("mirror-lastname");
const eMail = document.getElementById("mirror-email");


function mirrorFirstName() {
    nameMirror.textContent = nameInput.value;
    
}


function mirrorLastName() {

   lastNameMirror.textContent = lastName.value;

}


function mirrorEmail() {

    eMail.textContent = eMailInput.value;

}