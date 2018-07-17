module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
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
    Skill.hasMany(models.DevAttributeSkills, {
      foriegnKey: 'skillId',
      as: 'devAttributeSkills',
    });
    Skill.hasMany(models.LmsOutputSkills, {
      foriegnKey: 'skillId',
      as: 'lmsOutputSkills',
    });
    Skill.hasMany(models.SelfLearningSkills, {
      foriegnKey: 'skillId',
      as: 'selfLearningSkills',
    });
    Skill.hasMany(models.TeamProjectSkills, {
      foriegnKey: 'skillId',
      as: 'teamProjectSkills',
    });
    Skill.hasMany(models.SelfLearningSkills, {
      foriegnKey: 'skillId',
      as: 'selfLearningSkills',
    });
  };
  return Skill;
};
