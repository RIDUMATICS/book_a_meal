

document.querySelectorAll(".food").forEach((button) => {
  button.addEventListener('click', (e) => {
    const el = e.target
    if (el && el.tagName === 'BUTTON') {
    el.parentNode.parentNode.parentNode.style.display = "none";
  }
  })
})

document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', () => {
    notify.style.display = 'none';
  });
});

document.querySelectorAll('.food-add > i').forEach((add) => {
  add.addEventListener('click', () => {
    notify.style.display = 'block';
  });
});

document.querySelector(".btn-submit").addEventListener('click', () => {
  notify.style.display = 'none';
});