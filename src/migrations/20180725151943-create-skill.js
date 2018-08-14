module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Skills', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level: {
      type: Sequelize.ENUM('d0a', 'd0b', 'd1', 'd2', 'd3', 'd4'),
      allowNull: true,
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
  down: queryInterface => queryInterface.dropTable('Skills'),
};
