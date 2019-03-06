export default (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  Meals.associate = (models) => {
    Meals.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };
  return Meals;
};
