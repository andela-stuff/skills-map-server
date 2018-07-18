module.exports = (sequelize, DataTypes) => {
  const SelfLearningSkill = sequelize.define('SelfLearningSkill', {
    skillId: DataTypes.INTEGER,
    selfLearningId: DataTypes.INTEGER,
  }, {});
  SelfLearningSkill.associate = (models) => {
    SelfLearningSkill.belongsTo(models.Skill, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    SelfLearningSkill.belongsTo(models.SelfLearning, {
      foreignKey: 'selfLearningId',
      as: 'selfLearning',
    });
  };
  return SelfLearningSkill;
};
