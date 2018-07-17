module.exports = (sequelize, DataTypes) => {
  const TeamProject = sequelize.define('TeamProject', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {});
  TeamProject.associate = (models) => {
    TeamProject.hasMany(models.TeamProjectSkills, {
      foreignKeys: 'teamProjectSkillId',
      as: 'teamProjectSkills',
    });
  };
  return TeamProject;
};
