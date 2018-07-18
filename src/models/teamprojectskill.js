module.exports = (sequelize, DataTypes) => {
  const TeamProjectSkill = sequelize.define('TeamProjectSkill', {
    skillId: DataTypes.INTEGER,
    teamProjectid: DataTypes.INTEGER,
  }, {});
  TeamProjectSkill.associate = (models) => {
    TeamProjectSkill.belongsTo(models.Skill, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    TeamProjectSkill.belongsTo(models.TeamProject, {
      foreignKey: 'teamProjectId',
      as: 'teamProjects',
    });
  };
  return TeamProjectSkill;
};
