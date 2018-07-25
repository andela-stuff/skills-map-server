module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LmsOutputSkills', {
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
    lmsOutputId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'LmsOutputs',
        key: 'id',
        as: 'lmsOutputId',
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
  down: queryInterface => queryInterface.dropTable('LmsOutputSkills'),
};
