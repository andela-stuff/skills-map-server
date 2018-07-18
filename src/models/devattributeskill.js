module.exports = (sequelize, DataTypes) => {
  const DevAttributeSkill = sequelize.define('DevAttributeSkill', {
    skillId: DataTypes.INTEGER,
    devAttributeId: DataTypes.INTEGER,
  }, {});
  DevAttributeSkill.associate = (models) => {
    DevAttributeSkill.belongsTo(models.Skill, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    DevAttributeSkill.belongsTo(models.DevAttribute, {
      foreignKey: 'devAttributeId',
      as: 'devAttributes',
    });
  };
  return DevAttributeSkill;
};
