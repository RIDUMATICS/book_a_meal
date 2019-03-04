export default (sequelize, DataTypes) => {
  const Caterers = sequelize.define('Caterers', {
    id: DataTypes.INTEGER,
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Caterers.associate = (models) => {
  };
  return Caterers;
};
