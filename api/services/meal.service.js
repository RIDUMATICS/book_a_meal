import database from '../database/models';


const MealService = {
  addMeal(mealInput) {
    return database.Meals.create({
      name: mealInput.name,
      price: mealInput.price,
      size: mealInput.size,
    }).then(meal => ({
      id: meal.id, name: meal.name, price: meal.price, size: meal.size,
    }));
  },

  fecthAllMeals() {
    return database
      .Meals
      .findAll()
      .then(meals => meals);
  },
};

const MealServic = {
  fecthAllMeals() {
    const validMeal = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.img = meal.img;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeal;
  },
  // value is an Object
  updateMeal(id, value) {
    // eslint-disable-next-line eqeqeq
    const mealIndex = dummyData.meals.findIndex(currentMeal => currentMeal.id == id);
    if (mealIndex >= 0) {
      const initialMeal = dummyData.meals[mealIndex];
      const newMeal = { ...initialMeal, ...value };
      dummyData.meals[mealIndex] = newMeal;
      return { status: 200, data: newMeal };
    }
    return { status: 204 };
  },
  dropMeal(id) {
    // eslint-disable-next-line eqeqeq
    const mealIndex = dummyData.meals.findIndex(currentMeal => currentMeal.id == id);
    if (mealIndex >= 0) {
      const delMeal = dummyData.meals[mealIndex];
      // eslint-disable-next-line eqeqeq
      const newMeals = dummyData.meals.filter(meal => meal.id != id);
      dummyData.meals = newMeals;
      return { status: 200, data: delMeal };
    }
    return { status: 204 };
  },

};

export default MealService;
