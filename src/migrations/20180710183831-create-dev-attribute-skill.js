module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('DevAttributeSkills', {
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
    devAttributeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'DevAttributes',
        key: 'id',
        as: 'devAttributeId',
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
  down: queryInterface => queryInterface.dropTable('DevAttributeSkills'),
};
