export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    orderTime: DataTypes.DATE,
    deliveryTime: DataTypes.DATE,
    isCancelled: DataTypes.BOOLEAN,
    isDelivered: DataTypes.BOOLEAN,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Orders.associate = (models) => {
  };
  return Orders;
};
