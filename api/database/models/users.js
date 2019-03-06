export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],

    },

  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Meals, {
      foreignKey: 'userId',
      as: 'meals',
    });
    Users.hasMany(models.Menus, {
      foreignKey: 'userId',
      as: 'menus',
    });
  };
  return Users;
};
