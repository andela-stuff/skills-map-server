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
      foreignKey: 'skillSessionId',
      as: 'skillSessionSkills',
    });
  };
  return SkillSession;
};
