export default (sequelize, DataTypes) => {
  const meal = sequelize.define('meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  meal.associate = (models) => {
    meal.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'Caterer',
    });
    meal.hasMany(models.Order, {
      foreignKey: 'mealId',
      as: 'Orders',
    });
  };
  return meal;
};
