const express = require('express');
const router = express.Router();

const multer = require('multer');
const multerStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, 'img_' + Date.now() + '-' + file.originalname);
	}
})
const upload = multer({ storage: multerStorage });

const controller = require('../controllers/contactController');

router.post('/', upload.single('attachment'), controller.processContact);
/* 
	Este middleware de upload, lo que hace es decodificar la data que viene del request
	y parsearla de tal manera que nos deja ahora con dos propiedades en el request así:

	- req.body
	- req.file
*/

module.exports = router;