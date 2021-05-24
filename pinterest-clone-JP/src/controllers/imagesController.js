// import model into controller.
const { image } = require('../database/models');

const controller = {
  browse: (req, res) => {
    image
      .findAll({
        include: ['user'],
      })
      .then((images) => {
        return res.json(images);
      });
  },

  read: (req, res) => {
    return res.send('The Subscriptions See page works ok');
  },

  edit: (req, res) => {
    return res.send('The Subscriptions Edit One page works ok');
  },

  add: (req, res) => {
    let dataToSave = {
      urlPath: req.body.urlPath,
      description: req.body.description,
      userId: 1,
    };

    image
      .create(dataToSave)
      // Success message.
      .then((data) => {
        return res.send({
          status: 200,
          message: 'done',
          data: data,
        });
      })
      .catch((error) => {
        return res.status(504).send({
          status: 504,
          message: 'Imposible guardar en la DB',
        });
      });
  },

  delete: (req, res) => {
    return res.send('The Subscriptions Delete page works ok');
  },
};

module.exports = controller;
