module.exports = (sequelize, DataTypes) => {
  const LmsOutputSkill = sequelize.define('LmsOutputSkill', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    skillId: DataTypes.INTEGER,
    lmsOutputId: DataTypes.INTEGER,
  }, {});
  LmsOutputSkill.associate = (models) => {
    LmsOutputSkill.belongsTo(models.Skills, {
      foreignKey: 'skillId',
      as: 'skills',
    });
    LmsOutputSkill.belongsTo(models.LmsOutputs, {
      foreignKey: 'lmsOutputId',
      as: 'lmsOutputs',
    });
  };
  return LmsOutputSkill;
};
