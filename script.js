// User input fields
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Error text fields
const errorTextFirstName = document.querySelector(".error-text.firstName");
const errorTextLastName = document.querySelector(".error-text.lastName");
const errorTextEmail = document.querySelector(".error-text.Email");
const errorTextPassword = document.querySelector(".error-text.Password");

// Claim button
const claimBtn = document.querySelector(".claim");

// Const EmailPattern
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const verifyUser = (event) => {
  event.preventDefault();
  if (firstName.value === "" && firstName.value <= 2) {
    errorTextFirstName.textContent =
      "First name cannot be empty or less than 2 characters.";
  }

  if (lastName.value === "" && lastName.value <= 2) {
    errorTextLastName.textContent =
      "Last name cannot be empty or less than 2 characters.";
  }

  if (!pattern.test(email.value)) {
    errorTextEmail.textContent = "Please enter a valid email.";
  }

  if(password.value === "" && password.value <= 8) {
    errorTextPassword.textContent = "Password must be at least 8 digits and must contain at least one number"
  }
};

claimBtn.addEventListener("click", verifyUser);
