import { Router } from 'express';
import passport from 'passport';
import MealController from '../../controller/meal.controller';

const mealRouter = Router();

mealRouter.get('/', MealController.fetchAllMeals);
mealRouter.post('/', passport.authenticate('jwt', { session: false }), MealController.addMeal);
mealRouter.get('/:id', MealController.getSingleMeal);
mealRouter.put('/:id', MealController.updateMeal);
mealRouter.delete('/:id', MealController.dropMeal);
export default mealRouter;
