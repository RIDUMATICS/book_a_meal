export default (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Meals.associate = (models) => {
  };
  return Meals;
};
