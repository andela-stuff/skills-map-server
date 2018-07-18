module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('SkillSessionSkills', {
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
    skillSessionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'SkillSessions',
        key: 'id',
        as: 'skillSessionId',
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
  down: queryInterface => queryInterface.dropTable('SkillSessionSkills'),
};
