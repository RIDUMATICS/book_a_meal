import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

const MenuService = {
  fetchMenu() {
    const validMenus = dummyData.menus.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.mealId = menu.mealId;
      newMenu.date = menu.date;
      newMenu.section = menu.section;
      return newMenu;
    });
    return validMenus;
  },
  addMenu(menu) {
    const nextId = dummyData.menus.length + 1;
    const newMenu = new Menu();
    newMenu.id = nextId;
    newMenu.mealId = menu.mealId;
    newMenu.date = menu.date;
    newMenu.section = menu.section;
    dummyData.menus.push(newMenu);
    return newMenu;
  },

};

export default MenuService;
