module.exports = (sequelize, DataTypes) => {
  const TeamProject = sequelize.define('TeamProject', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {});
  TeamProject.associate = (models) => {
    TeamProject.hasMany(models.TeamProjectSkill, {
      foreignKeys: 'teamProjectSkillId',
      as: 'teamProjectSkills',
    });
  };
  return TeamProject;
};
