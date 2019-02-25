"use strict";

/* eslint-disable no-console */

/* eslint-disable no-restricted-globals */

/* eslint-disable no-undef */
var logForm = document.querySelector('#login');
var signupForm = document.querySelector('#signup');
var notify = document.querySelector('#notify');
document.querySelector('#sign-up').addEventListener('click', function () {
  signupForm.style.display = 'block';
});
document.querySelector('#log-in').addEventListener('click', function () {
  logForm.style.display = 'block';
});
document.querySelectorAll('.close').forEach(function (close) {
  close.addEventListener('click', function () {
    signupForm.style.display = 'none';
    logForm.style.display = 'none';
    notify.style.display = 'none';
  });
});
document.querySelector('form[name=login]').addEventListener('submit', function (e) {
  e.preventDefault();
  var email = e.target[0].value.toLowerCase();
  var password = e.target[1].value;
  var user = data.users.filter(function (currentUser) {
    return currentUser.email === email;
  });

  if (user.length === 1) {
    if (user[0].password === password) {
      document.cookie = "user=".concat(user.username);
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
document.querySelector('form[name=signup]').addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = './dashboard.html';
});
document.querySelector('#username').innerText = 'Ridwan';