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
  window.location.href = './dashboard.html';
});
document.querySelector('form[name=signup]').addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = './dashboard.html';
});
document.querySelector('#username').innerText = 'Ridwan';