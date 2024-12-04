const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function resetFormInput(formSelector) {
    const formInput = document.querySelectorAll(`${formSelector} input`);
    formInput.forEach(input => input.value = '');
};

signupLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    resetFormInput('.login');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    resetFormInput('.signup');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});