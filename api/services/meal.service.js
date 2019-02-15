/* eslint-disable no-console */
import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fecthAllMeals() {
    const validMeal = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeal;
  },
  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    // eslint-disable-next-line no-param-reassign
    meal.id = newId;
    const newMeal = new Meal();
    newMeal.id = meal.id;
    newMeal.name = meal.name;
    newMeal.size = meal.size;
    newMeal.price = meal.price;
    dummyData.meals.push(newMeal);
    return newMeal;
  },
  getMeal(id) {
    // eslint-disable-next-line eqeqeq
    const meal = dummyData.meals.find(currentMeal => currentMeal.id == id);
    return meal || {};
  },
};

export default MealService;
