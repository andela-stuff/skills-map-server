module.exports = (sequelize, DataTypes) => {
  const TeamProjectSkill = sequelize.define('TeamProjectSkill', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    skillId: DataTypes.INTEGER,
    teamProjectid: DataTypes.INTEGER,
  }, {});
  TeamProjectSkill.associate = (models) => {
    TeamProjectSkill.belongsTo(models.Skills, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    TeamProjectSkill.belongsTo(models.TeamProjects, {
      foreignKey: 'teamProjectId',
      as: 'teamProjects',
    });
  };
  return TeamProjectSkill;
};
