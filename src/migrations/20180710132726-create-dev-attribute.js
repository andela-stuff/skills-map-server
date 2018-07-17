module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('DevAttributes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,

    },
    name: {
      type: Sequelize.STRING,
      unique: true,
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
  down: queryInterface => queryInterface.dropTable('DevAttributes'),
};
