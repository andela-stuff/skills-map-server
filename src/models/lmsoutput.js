module.exports = (sequelize, DataTypes) => {
  const LmsOutput = sequelize.define('LmsOutput', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    level: {
      type: DataTypes.ENUM('d0a', 'd0b', 'd1', 'd2', 'd3', 'd4'),
      allowNull: false,
      defaultValue: 'd0a',
    },
  }, {});
  LmsOutput.associate = (models) => {
    LmsOutput.hasMany(models.LmsOutputSkill, {
      foreignKeys: 'lmsOutputSkillsId',
      as: 'lmsOutputSkills',
    });
  };
  return LmsOutput;
};
