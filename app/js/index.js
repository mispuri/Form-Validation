const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  } else {
    nameError.innerHTML = ' <i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validatePhone() {
  let phone = document.getElementById('phone').value;
  if (phone.length == 0) {
    phoneError.innerHTML = 'Phone No. is required';
    return false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Only digits please';
    return false;
  } else if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone No. should be 10 digits';
    return false;
  } else if (phone.length > 10) {
    phone.slice(0, 10);
    return false;
  } else {
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById('email').value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalid';
    return false;
  } else {
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateMessage() {
  let message = document.getElementById('message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + 'More characters required';
    return false;
  } else {
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
