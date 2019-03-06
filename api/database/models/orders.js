export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'cancelled', 'delivered'],
    },
    menuId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    orderTime: DataTypes.DATE,
    deliveryTime: DataTypes.DATE,
  }, {});
  Orders.associate = (models) => {
    Orders.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'User',
    });
    Orders.belongsTo(models.Menus, {
      foreignKey: 'menuId',
      as: 'Menu',
    });
  };
  return Orders;
};
