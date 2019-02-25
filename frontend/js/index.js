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
  const email = e.target[0].value.toLowerCase();
  const password = e.target[1].value;
  const user = data.users.filter(currentUser => currentUser.email === email);

  if (user.length === 1) {
    if (user[0].password === password) {
      document.cookie = `user=${user.username}`;
      logForm.style.display = 'none';
      checkCookie();
      document.querySelector('#username').innerText = getCookie('user');
    } else {
      logForm.style.display = 'none';
      notify.style.display = 'inline-block';
      notify.querySelector('#msg').innerText = 'Incorrect Password';
    }
  } else {
    logForm.style.display = 'none';
    notify.style.display = 'inline-block';
    notify.querySelector('#msg').innerText = 'User not register SignUp to LogIn';
  }
});

document.querySelector('form[name=signup]').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = './dashboard.html';
});


document.querySelector('#username').innerText = 'Ridwan';
