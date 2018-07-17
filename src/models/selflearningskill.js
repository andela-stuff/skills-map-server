module.exports = (sequelize, DataTypes) => {
  const SelfLearningSkill = sequelize.define('SelfLearningSkill', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    skillId: DataTypes.INTEGER,
    selfLearningId: DataTypes.INTEGER,
  }, {});
  SelfLearningSkill.associate = (models) => {
    SelfLearningSkill.belongsTo(models.Skills, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    SelfLearningSkill.belongsTo(models.SelfLearnings, {
      foreignKey: 'selfLearningId',
      as: 'selfLearning',
    });
  };
  return SelfLearningSkill;
};
