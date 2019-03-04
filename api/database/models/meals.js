export default (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
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
    Meals.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'Caterer',
    });
  };
  return Meals;
};
