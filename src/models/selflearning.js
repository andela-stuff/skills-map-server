module.exports = (sequelize, DataTypes) => {
  const SelfLearning = sequelize.define('SelfLearning', {
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
  SelfLearning.associate = (models) => {
    SelfLearning.hasMany(models.SelfLearningSkills, {
      foreignKeys: 'selfLearningSkillId',
      as: 'selfLearningSkills',
    });
  };
  return SelfLearning;
};
