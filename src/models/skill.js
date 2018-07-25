module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.ENUM('d0a', 'd0b', 'd1', 'd2', 'd3', 'd4'),
      allowNull: false,
      defaultValue: 'd0a',
    },
  }, {});
  Skill.associate = (models) => {
    Skill.hasMany(models.DevAttributeSkill, {
      foreignKey: 'skillId',
      as: 'devAttributes',
    });
    Skill.hasMany(models.LmsOutputSkill, {
      foreignKey: 'skillId',
      as: 'lmsOutputs',
    });
    Skill.hasMany(models.SelfLearningSkill, {
      foreignKey: 'skillId',
      as: 'selfLearnings',
    });
    Skill.hasMany(models.TeamProjectSkill, {
      foreignKey: 'skillId',
      as: 'teamProjects',
    });
    Skill.hasMany(models.SkillSessionSkill, {
      foreignKey: 'skillId',
      as: 'skillSessions',
    });
  };
  return Skill;
};
