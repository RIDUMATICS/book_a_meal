import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const menu = MenuService.fetchMenu();
    return res.status(200).json({ status: 'success', menu });
  },
  AddNewMenu(req, res) {
    const meals = req.body;
    const menu = MenuService.addMenu(meals);
    return res.status(200).json({ status: 'success', menu });
  },
};

export default MenuController;
