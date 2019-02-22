import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const menu = MenuService.fetchMenu();
    return res.status(200).json({ status: 'success', menu });
  },
  AddNewMenu(req, res) {
    const newMenu = req.body;
    const menu = MenuService.addMenu(newMenu);
    return res.status(200).json({ status: 'success', menu });
  },
};

export default MenuController;
