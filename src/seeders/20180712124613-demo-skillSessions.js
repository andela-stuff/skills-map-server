module.exports = {
  up: queryInterface => queryInterface.bulkInsert('SkillSessions', [{
    name: 'Understanding the Business',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Learning the Codebase',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Getting Started with a Team',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Pair Programming',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Reading Documentation',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Testing and Debugging',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Building World Class Features',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Agile',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Product Stewardship: Adding Value > Completing Tasks',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'The Problem Solving Process',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Stakeholders & Context',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Making Recommendations',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Making Products People Love',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: queryInterface => queryInterface.bulkDelete(null, null, {}),
};
