/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const logForm = document.querySelector('#login');
const signupForm = document.querySelector('#signup');
const notify = document.querySelector('#notify');


document.querySelector('#sign-up').addEventListener('click', () => {
  signupForm.style.display = 'block';
});

document.querySelector('#log-in').addEventListener('click', () => {
  logForm.style.display = 'block';
});

document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', () => {
    signupForm.style.display = 'none';
    logForm.style.display = 'none';
    notify.style.display = 'none';
  });
});

document.querySelector('form[name=login]').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = './dashboard.html';
});

document.querySelector('form[name=signup]').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = './dashboard.html';
});


document.querySelector('#username').innerText = 'Ridwan';
