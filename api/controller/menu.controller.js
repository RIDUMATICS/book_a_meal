import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const menus = MenuService.fetchMenu();
    return res.status(200).json({ status: 'success', menus });
  },
  fetchSingleMenu(req, res) {
    const { section } = req.params;
    const { date } = req.query;
    const menus = MenuService.fetchSingleMenu(section, date);
    if (menus === null) {
      res.status(404).json({ status: 'Bad request' });
    } else if (menus.length > 0) {
      res.status(200).json({ status: 'success', menus });
    } else if (menus.length === 0) {
      res.status(204).json({ status: 'No Content', menus });
    }
  },
  AddNewMenu(req, res) {
    const newMenu = req.body;
    const menu = MenuService.addMenu(newMenu);
    return res.status(201).json({ status: 'success', menu });
  },
};

export default MenuController;
