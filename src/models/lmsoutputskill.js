module.exports = (sequelize, DataTypes) => {
  const LmsOutputSkill = sequelize.define('LmsOutputSkill', {
    skillId: DataTypes.INTEGER,
    lmsOutputId: DataTypes.INTEGER,
  }, {});
  LmsOutputSkill.associate = (models) => {
    LmsOutputSkill.belongsTo(models.Skill, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    LmsOutputSkill.belongsTo(models.LmsOutput, {
      foreignKey: 'lmsOutputId',
      as: 'lmsOutputs',
    });
  };
  return LmsOutputSkill;
};
