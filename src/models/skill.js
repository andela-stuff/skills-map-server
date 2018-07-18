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
      foriegnKey: 'skillId',
      as: 'devAttributeSkills',
    });
    Skill.hasMany(models.LmsOutputSkill, {
      foriegnKey: 'skillId',
      as: 'lmsOutputSkills',
    });
    Skill.hasMany(models.SelfLearningSkill, {
      foriegnKey: 'skillId',
      as: 'selfLearningSkills',
    });
    Skill.hasMany(models.TeamProjectSkill, {
      foriegnKey: 'skillId',
      as: 'teamProjectSkills',
    });
    Skill.hasMany(models.SkillSessionSkill, {
      foriegnKey: 'skillId',
      as: 'skillSessionSkills',
    });
  };
  return Skill;
};
