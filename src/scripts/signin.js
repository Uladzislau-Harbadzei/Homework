let isValid = true;
let username = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let name_error = document.getElementById('name_error');
let email_error = document.getElementById('email_error');
let password_error = document.getElementById('password_error');

const clearErrors = () => {
  Array.from(document.querySelectorAll('.errortext')).forEach(
    (element) => (element.textContent = '')
  );
};

const setError = (texterror, element) => {
  element.textContent = texterror;
};

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();

  isValid = true;

  if (!username.value.trim()) {
    setError('Enter name', name_error);
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    setError('Enter correct email', email_error);
    isValid = false;
  }

  if (password.value.trim().length < 6) {
    setError('The password must be at least 6 characters long.', password_error);
    isValid = false;
  }

  if (isValid) {
    console.log('The form has been successfully submitted');
    window.location.href = `/src/page2.html?username=${username.value}`;
    document.getElementById('form').reset();
  }
});
