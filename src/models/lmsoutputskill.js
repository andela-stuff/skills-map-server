module.exports = (sequelize, DataTypes) => {
  const LmsOutputSkill = sequelize.define('LmsOutputSkill', {
    skillId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Skills',
        key: 'id',
        as: 'skillId'
      }
    },
    lmsOutputId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'LmsOutputs',
        key: 'id',
        as: 'lmsOutputId'
      }
    }
  });
  LmsOutputSkill.associate = (models) => {
    LmsOutputSkill.belongsTo(models.Skill, {
      foreignKey: 'skillId',
      as: 'skill'
    });
    LmsOutputSkill.belongsTo(models.LmsOutput, {
      foreignKey: 'lmsOutputId',
      as: 'lmsOutput'
    });
  };
  return LmsOutputSkill;
};
