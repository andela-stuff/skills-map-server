module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TeamProjectSkills', {
    id: {
      allowNull: false,
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
    teamProjectId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'TeamProjects',
        key: 'id',
        as: 'teamProjectId',
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
  down: queryInterface => queryInterface.dropTable('TeamProjectSkills'),
};
