import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const menus = MenuService.fetchMenu();
    menus.then(respMenus => res.status(200).json({ status: 'success', respMenus }));
  },
  fetchSingleAdminMenu(req, res) {
    const { adminId } = req.params;
    const menus = MenuService.fetchSingleMenu(adminId);

    menus.then((respMenus) => {
      if (respMenus.length === 0) {
        res.status(204).json({ status: 'No Menu for AdminId', respMenus });
      } else if (respMenus.length > 0) {
        res.status(200).json({ status: 'success', respMenus });
      }
    });
  },
  AddNewMenu(req, res) {
    if (req.user.role === 'admin') {
      const newMenu = req.body;
      newMenu.userId = req.user.id;
      const menu = MenuService.addMenu(newMenu);
      menu.then(resMenu => res.status(201).json({ status: 'success', resMenu }));
    } else {
      res.send(401);
    }
  },
};

export default MenuController;
