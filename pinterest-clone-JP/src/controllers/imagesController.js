// Importo el modelo necesario
const { image } = require('../database/models');

const controller = {
	browse: (req, res) => {
		image.findAll()
			.then(images => {
				return res.json(images);
			})
	},

	read: (req, res) => {
		return res.send('The Subscriptions See page works ok');
	},

	edit: (req, res) => {
		return res.send('The Subscriptions Edit One page works ok');
	},

	add: (req, res) => {
		return rese.send('The Subscriptions Add page works ok');
	},

	delete: (req, res) => {
		return res.send('The Subscriptions Delete page works ok');
	},
};

module.exports = controller;