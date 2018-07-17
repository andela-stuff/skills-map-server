module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LmsOutputs', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,

    },
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    level: {
      type: Sequelize.ENUM('d0a', 'd0b', 'd1', 'd2', 'd3', 'd4'),
      allowNull: false,
      defaultValue: 'd0a',
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
  down: queryInterface => queryInterface.dropTable('LmsOutputs'),
};
