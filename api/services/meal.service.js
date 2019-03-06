import database from '../database/models';


const MealService = {
  addMeal(mealInput) {
    return database.Meals.create({
      name: mealInput.name,
      price: mealInput.price,
      size: mealInput.size,
      userId: mealInput.userId,
    }).then(meal => ({
      id: meal.id, name: meal.name, price: meal.price, size: meal.size, userId: mealInput.userId,
    }));
  },

  fecthAllMeals() {
    return database
      .Meals
      .findAll()
      .then(meals => meals);
  },

  updateMeal(id, value) {
    return database
      .Meals
      .findById(id)
      .then((meal) => {
        if (!meal) {
          return { status: 204 };
        }
        return meal
          .update({
            name: value.name || meal.name,
            price: value.price || meal.price,
            size: value.size || meal.size,
          }).then(() => ({ status: 200, data: meal }));
      });
  },
  dropMeal(id) {
    return database
      .Meals
      .findById(id)
      .then((meal) => {
        if (!meal) {
          return { status: 400 };
        }
        return meal
          .destroy()
          .then(() => ({ status: 200, message: 'deleted' }));
      });
  },

};

export default MealService;
