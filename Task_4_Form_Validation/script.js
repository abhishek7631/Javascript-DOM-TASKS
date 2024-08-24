let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("username").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = "valid";
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "Email is Invalid";
    return false;
  }

  emailError.innerHTML = "valid";
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail()) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  submitError.innerHTML = alert("Form submitted successfully!");
  return true;
}
