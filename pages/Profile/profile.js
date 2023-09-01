
// Function to validate input fields
function validateInputs() {
    var nameInput = document.getElementById("name");
    var lastNameInput = document.getElementById("lastname");
    var emailInput = document.getElementById("Email");
  
    // Check for the first name
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("input-error");
    } else {
      nameInput.classList.remove("input-error");
    }
  
    // Check for the last name
    if (lastNameInput.value.trim() === "") {
      lastNameInput.classList.add("input-error");
    } else {
      lastNameInput.classList.remove("input-error");
    }
}
   
  
  // Attach function to the save button
  document.addEventListener("DOMContentLoaded", function () {
    var saveButton = document.querySelector(".save-btn");
    saveButton.addEventListener("click", validateInputs);
  });

