import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

const MenuService = {
  fetchMenu() {
    const len = dummyData.menu.length;
    const validMeals = dummyData.menu[len - 1].meals.map((meal) => {
      const newMeal = new Menu();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.section = meal.section;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      newMeal.img = meal.img;
      return newMeal;
    });
    return validMeals;
  },
  addMenu(menu) {
    // eslint-disable-next-line no-param-reassign
    const newMenu = {};
    newMenu.meals = [];

    // eslint-disable-next-line array-callback-return
    menu.map((meal, index) => {
      const newMeal = new Menu();
      newMeal.id = index;
      newMeal.name = meal.name;
      newMeal.section = meal.section;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      newMeal.img = meal.img;
      newMenu.meals.push(newMeal);
    });
    dummyData.menu.push(newMenu);
    return newMenu;
  },

};

export default MenuService;
