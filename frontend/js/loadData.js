// eslint-disable-next-line no-undef
const data = JSON.parse(localStorage.getItem('iyapato-data'));

const food = (name, price) => `<div class="food"><img src="./images/Spaghetti.jpg" /><div><h3>${name}</h3><p>₦ ${price}</p><div class="food-button-group"><div class="btn">Add to Cart</div> <div class="btn btn-white"><i class="fas fa-heart"></i></div></div></div></div>`;


const len = data.menu.length;
data.menu[len - 1].breakfast.forEach((meal) => {
  // eslint-disable-next-line no-undef
  document.querySelector('#breakfast').innerHTML += food(meal.name, meal.price);
  // eslint-disable-next-line no-console
  console.log(food(meal.name, meal.price));
});
data.menu[len - 1].lunch.forEach((meal) => {
  // eslint-disable-next-line no-undef
  document.querySelector('#lunch').innerHTML += food(meal.name, meal.price);
});
data.menu[len - 1].super.forEach((meal) => {
  // eslint-disable-next-line no-undef
  document.querySelector('#super').innerHTML += food(meal.name, meal.price);
});
