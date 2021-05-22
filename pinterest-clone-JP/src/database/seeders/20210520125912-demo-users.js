'use strict';

const faker = require('faker');

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
		const fakeUsers = [];

		for (let i = 1; i <= 50; i++) {
			fakeUsers.push(
				{
					userName: faker.name.findName(),
					email: faker.internet.email(),
					createdAt: new Date,
					updatedAt: null,
				}
			)
		}

		await queryInterface.bulkInsert('users', fakeUsers, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		*/
		await queryInterface.bulkDelete('users', null, {});
	}
};
