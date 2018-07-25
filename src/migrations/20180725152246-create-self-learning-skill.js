module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('SelfLearningSkills', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,

    },
    skillId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Skills',
        key: 'id',
        as: 'skillId',
      },
    },
    selfLearningId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'SelfLearnings',
        key: 'id',
        as: 'selfLearningId',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('SelfLearningSkills'),
};
