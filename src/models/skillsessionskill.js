module.exports = (sequelize, DataTypes) => {
  const SkillSessionSkill = sequelize.define('SkillSessionSkill', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    skillId: DataTypes.INTEGER,
    skillSessionId: DataTypes.INTEGER,
  }, {});
  SkillSessionSkill.associate = (models) => {
    SkillSessionSkill.belongsTo(models.Skills, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    SkillSessionSkill.belongsTo(models.SkillSessions, {
      foreignKey: 'skillSessionId',
      as: 'skillSessions',
    });
  };
  return SkillSessionSkill;
};
