module.exports = (sequelize, DataTypes) => {
  const DevAttribute = sequelize.define('DevAttribute', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {});
  DevAttribute.associate = (models) => {
    DevAttribute.hasMany(models.DevAttributeSkill, {
      foreignKey: 'devAttributeId',
      as: 'devAttributeSkills',
    });
  };
  return DevAttribute;
};
