import database from '../database/models';


const MenuService = {
  addMenu(menuInput) {
    return database.Menus.create({
      mealId: menuInput.mealId,
      section: menuInput.section,
      userId: menuInput.userId,
    }).then(menu => ({
      id: menu.id, section: menuInput.section, mealId: menuInput.mealId, userId: menuInput.userId,
    }));
  },

  fetchMenu() {
    return database
      .Menus
      .findAll()
      .then(menus => menus);
  },

  fetchSingleMenu(adminId) {
    return database
      .Menus
      .findAll({
        where: {
          userId: adminId,
        },
      }).then(menus => menus);
  },

};

export default MenuService;
