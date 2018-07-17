module.exports = (sequelize, DataTypes) => {
  const LmsOutput = sequelize.define('LmsOutput', {
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
    level: {
      type: DataTypes.ENUM('d0a', 'd0b', 'd1', 'd2', 'd3', 'd4'),
      allowNull: false,
      defaultValue: 'd0a',
    },
  }, {});
  LmsOutput.associate = (models) => {
    LmsOutput.hasMany(models.LmsOutputSkills, {
      foreignKeys: 'lmsOutputSkillsId',
      as: 'lmsOutputSkills',
    });
  };
  return LmsOutput;
};
