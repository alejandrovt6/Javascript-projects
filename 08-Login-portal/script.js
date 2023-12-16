const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.login-btn');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
  container.classList.add('active');
});

loginLink.addEventListener('click', () => {
  container.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.add('active-form');
});

iconClose.addEventListener('click', () => {
    container.classList.remove('active-form');
  });
