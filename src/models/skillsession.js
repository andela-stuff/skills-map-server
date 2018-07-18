module.exports = (sequelize, DataTypes) => {
  const SkillSession = sequelize.define('SkillSession', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {});
  SkillSession.associate = (models) => {
    SkillSession.hasMany(models.SkillSessionSkill, {
      foreignKeys: 'lmsOutputSkillsId',
      as: 'lmsOutputSkills',
    });
  };
  return SkillSession;
};
