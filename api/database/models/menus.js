export default (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
    mealId: DataTypes.INTEGER,
    section: {
      type: DataTypes.ENUM,
      values: ['breakfast', 'lunch', 'dinner'],
    },
    userId: DataTypes.INTEGER,
  }, {});
  Menus.associate = (models) => {
    Menus.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };
  return Menus;
};