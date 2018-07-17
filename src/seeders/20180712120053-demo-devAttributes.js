module.exports = {
  up: queryInterface => queryInterface.bulkInsert('DevAttributes', [{
    name: 'Quality',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Quantity',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Initiative',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Communication',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Professionalism',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Integration',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: queryInterface => queryInterface.bulkDelete(null, null, {}),
};
