module.exports = (sequelize, DataTypes) => {
  const SelfLearning = sequelize.define('SelfLearning', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  }, {});
  SelfLearning.associate = (models) => {
    SelfLearning.hasMany(models.SelfLearningSkill, {
      foreignKeys: 'selfLearningSkillId',
      as: 'selfLearningSkills',
    });
  };
  return SelfLearning;
};
