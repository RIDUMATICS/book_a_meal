export default (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Meals.associate = (models) => {
  };
  return Meals;
};
