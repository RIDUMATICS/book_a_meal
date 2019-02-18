/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const logForm = document.querySelector('#login');
const signupForm = document.querySelector('#signup');
const notify = document.querySelector('#notify');

// eslint-disable-next-line array-callback-return
const getCookie = (name) => {
  const re = new RegExp(`${name}=([^;]+)`);
  const value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
};

const checkCookie = () => {
  if (getCookie('user')) {
    document.querySelector('#sign-up').style.display = 'none';
    document.querySelector('#log-in').style.display = 'none';
    document.querySelector('#log-out').style.display = 'inline-block';
    document.querySelector('#dashboard').style.display = 'inline-block';
  } else {
    document.querySelector('#sign-up').style.display = 'inline-block';
    document.querySelector('#log-in').style.display = 'inline-block';
    document.querySelector('#log-out').style.display = 'none';
    document.querySelector('#dashboard').style.display = 'none';
  }
};

console.log(getCookie('user'));

checkCookie();


const data = JSON.parse(localStorage.getItem('iyapato-data'));


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
  const userName = e.target[0].value;
  const email = e.target[1].value.toLowerCase();
  const password = e.target[2].value;
  const user = data.users.filter(currentUser => currentUser.email === email);

  if (user.length === 0) {
    const id = data.users.length;
    data.users.push({
      id, userName, email, password,
    });
    localStorage.setItem('iyapato-data', JSON.stringify(data));
    signupForm.style.display = 'none';
    notify.style.display = 'inline-block';
    notify.querySelector('#msg').innerText = 'Successful LogIn to continue';
  } else {
    signupForm.style.display = 'none';
    notify.style.display = 'inline-block';
    notify.querySelector('#msg').innerText = 'Not a new user LogIn to continue';
  }
});


document.querySelector('#log-out').addEventListener('click', () => {
  document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  location.reload();
});


document.querySelector('#username').innerText = getCookie('user') || 'No User';
