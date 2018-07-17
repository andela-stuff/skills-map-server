module.exports = (sequelize, DataTypes) => {
  const DevAttribute = sequelize.define('DevAttribute', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {});
  DevAttribute.associate = (models) => {
    DevAttribute.hasMany(models.DevAttributeSkills, {
      foreignKeys: 'devAttributesId',
      as: 'devAttributeSkills',
    });
  };
  return DevAttribute;
};
