import "./reset.css";
import "./style.css";

// Validate Email, Country, Zip Code, Password and Password Confirmation

// Ensure app exists in DOM
const app = document.querySelector("#app");

// Get all input fields
const email = document.getElementById("email");
const zipcode = document.getElementById("zip-code");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

// Every field is required and needs to check type mismatch (email)
// Only passwords have patterns so only them would be checked
// for pattern mismatch
const inputFields = [email, zipcode, password, confirm];
inputFields.forEach((field) => {
  field.addEventListener("focusout", () => {
    isFieldValid(field);
  });

  // Clear message while user inputs
  field.addEventListener("input", () => {
    field.setCustomValidity(" ");
  });
});

function isFieldValid(field) {
  if (field.value === "") {
    field.setCustomValidity(`Please provide your ${field.id}`);
    field.reportValidity();
  } else if (field.validity.typeMismatch) {
    field.setCustomValidity(`Check if ${field.id} provided correctly`);
    field.reportValidity();
  } else if (field.validity.patternMismatch) {
    field.setCustomValidity(
      "Password should be at least 8 characters long and contain at least one number and at least one capital letter"
    );
    field.reportValidity();
  } else if (field.id === "confirm" && password.value !== confirm.value) {
    field.setCustomValidity("Passwords should match");
    field.reportValidity();
  } else {
    field.setCustomValidity(" ");
    if (!field.classList.contains("valid")) {
      field.classList.add("valid");
    }
    if (field.classList.contains("invalid")) {
      field.classList.remove("invalid");
    }
    return true;
  }
  if (!field.classList.contains("invalid")) {
    field.classList.add("invalid");
  }
  if (field.classList.contains("valid")) {
    field.classList.remove("valid");
  }
  return false;
}

// Get submit button
const button = document.getElementById("submit");
// Add submit event
button.addEventListener("click", submit);

function submit() {
  let areAllFieldsValid = true;
  inputFields.forEach((field) => {
    if (!isFieldValid(field)) {
      areAllFieldsValid = false;
    }
  });
  if (areAllFieldsValid) {
    alert("All fields passed! GJ!");
  } else {
    alert("Something is wrong...");
  }
}
