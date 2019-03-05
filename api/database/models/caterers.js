export default (sequelize, DataTypes) => {
  const Caterers = sequelize.define('Caterers', {
    name: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phoneNumber: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
  });
  Caterers.associate = (models) => {
  };
  return Caterers;
};
