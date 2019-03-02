"use strict";

// eslint-disable-next-line no-undef
var data = JSON.parse(localStorage.getItem('iyapato-data'));

var food = function food(name, price) {
  return "<div class=\"food\"><img src=\"./images/Spaghetti.jpg\" /><div><h3>".concat(name, "</h3><p>\u20A6 ").concat(price, "</p><div class=\"food-button-group\"><div class=\"btn\">Add to Cart</div> <div class=\"btn btn-white\"><i class=\"fas fa-heart\"></i></div></div></div></div>");
};

var len = data.menu.length;
data.menu[len - 1].breakfast.forEach(function (meal) {
  // eslint-disable-next-line no-undef
  document.querySelector('#breakfast').innerHTML += food(meal.name, meal.price); // eslint-disable-next-line no-console
});
data.menu[len - 1].lunch.forEach(function (meal) {
  // eslint-disable-next-line no-undef
  document.querySelector('#lunch').innerHTML += food(meal.name, meal.price);
});
data.menu[len - 1].super.forEach(function (meal) {
  // eslint-disable-next-line no-undef
  document.querySelector('#super').innerHTML += food(meal.name, meal.price);
});