'use strict';

const faker = require('faker');

const { user } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = await user.findAll();

    const fakeImages = [];

    for (let i = 1; i <= users.length; i++) {
      let randomIndex = Math.floor(Math.random() * users.length);
      fakeImages.push(
        {
          urlPath: faker.image.imageUrl(),
          description: faker.lorem.text(),
          userId: users[randomIndex].id,
          createdAt: new Date,
          updatedAt: new Date,
        }
      )
    }

    await queryInterface.bulkInsert('images', fakeImages, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('images', null, {});
  }
};
