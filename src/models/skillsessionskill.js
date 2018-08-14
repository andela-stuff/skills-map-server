module.exports = (sequelize, DataTypes) => {
  const SkillSessionSkill = sequelize.define('SkillSessionSkill', {
    skillId: DataTypes.INTEGER,
    skillSessionId: DataTypes.INTEGER,
  }, {});
  SkillSessionSkill.associate = (models) => {
    SkillSessionSkill.belongsTo(models.Skill, {
      foreignKey: 'skillId',
      as: 'skill',
    });
    SkillSessionSkill.belongsTo(models.SkillSession, {
      foreignKey: 'skillSessionId',
      as: 'skillSession',
    });
  };
  return SkillSessionSkill;
};
