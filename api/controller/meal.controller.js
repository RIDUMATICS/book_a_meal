/* eslint-disable no-console */
import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fecthAllMeals();
    allMeals.then(meals => res.status(200).json({ status: 'success', data: meals }));
  },
  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    createdMeal.then(meal => res.status(201).json({ status: 'success', data: meal }));
  },
};

export default MealController;
