import { Router } from 'express';
import passport from 'passport';
import MealController from '../../controller/meal.controller';

const mealRouter = Router();

mealRouter.get('/', passport.authenticate('jwt', { session: false }), MealController.fetchAllMeals);
mealRouter.post('/', passport.authenticate('jwt', { session: false }), MealController.addMeal);
mealRouter.put('/:id', passport.authenticate('jwt', { session: false }), MealController.updateMeal);
mealRouter.delete('/:id', passport.authenticate('jwt', { session: false }), MealController.dropMeal);
export default mealRouter;
