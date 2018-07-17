module.exports = (sequelize, DataTypes) => {
  const DevAttributeSkill = sequelize.define('DevAttributeSkill', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    skillId: DataTypes.INTEGER,
    devAttributeId: DataTypes.INTEGER,
  }, {});
  DevAttributeSkill.associate = (models) => {
    DevAttributeSkill.belongsTo(models.Skills, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    DevAttributeSkill.belongsTo(models.DevAttributes, {
      foreignKey: 'devAttributeId',
      as: 'devAttributes',
    });
  };
  return DevAttributeSkill;
};
