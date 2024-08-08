const { User } = require('../models');

const userData = [
  {
    username: 'tatih',
    password: 'test1'
    
  },
  {
    username: 'tahdah1',
    password: 'test2'
  },
  {
    username: 'lany3',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;