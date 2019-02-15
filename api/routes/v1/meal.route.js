import { Router } from 'express';
import MealController from '../../controller/meal.controller';

const mealRouter = Router();

mealRouter.get('/', MealController.fetchAllMeals);
mealRouter.post('/', MealController.addMeal);
mealRouter.get('/:id', MealController.getSingleMeal);
export default mealRouter;
