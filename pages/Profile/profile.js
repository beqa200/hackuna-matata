

function validateInputs() {
    var nameInput = document.getElementById("name");
    var lastNameInput = document.getElementById("lastname");
    var emailInput = document.getElementById("Email");
  
    
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("input-error");
    } else {
      nameInput.classList.remove("input-error");
    }
  
    if (lastNameInput.value.trim() === "") {
      lastNameInput.classList.add("input-error");
    } else {
      lastNameInput.classList.remove("input-error");
    }
}
   
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var saveButton = document.querySelector(".save-btn");
    saveButton.addEventListener("click", validateInputs);
  });

