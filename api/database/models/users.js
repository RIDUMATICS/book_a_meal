export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Meal, {
      foreignKey: 'userId',
      as: 'Meals',
    });
  };
  return Users;
};
