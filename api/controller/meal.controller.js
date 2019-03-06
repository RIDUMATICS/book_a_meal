import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    if (req.user.role === 'admin') {
      const allMeals = MealService.fecthAllMeals();
      allMeals.then(meals => res.status(200).json({ status: 'success', data: meals }));
    } else {
      res.send(401);
    }
  },
  addMeal(req, res) {
    if (req.user.role === 'admin') {
      const newMeal = req.body;
      newMeal.userId = req.user.id;
      const createdMeal = MealService.addMeal(newMeal);
      createdMeal.then(meal => res.status(201).json({ status: 'success', data: meal }));
    } else {
      res.send(401);
    }
  },
  updateMeal(req, res) {
    if (req.user.role === 'admin') {
      const { id } = req.params;
      const value = req.body;
      const updatedMeal = MealService.updateMeal(id, value);
      updatedMeal.then(resp => res.status(resp.status).json(resp));
    } else {
      res.send(401);
    }
  },
  dropMeal(req, res) {
    if (req.user.role === 'admin') {
      const { id } = req.params;
      const respond = MealService.dropMeal(id);
      respond.then(resp => res.status(resp.status).json(resp));
    } else {
      res.send(401);
    }
  },
};

export default MealController;
