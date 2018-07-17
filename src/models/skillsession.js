module.exports = (sequelize, DataTypes) => {
  const SkillSession = sequelize.define('SkillSession', {
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
  SkillSession.associate = (models) => {
    SkillSession.hasMany(models.skillSessionSkills, {
      foreignKeys: 'lmsOutputSkillsId',
      as: 'lmsOutputSkills',
    });
  };
  return SkillSession;
};
