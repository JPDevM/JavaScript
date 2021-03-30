module.exports = {
	processContact: (req, res) => {
		let data = JSON.parse(req.body.formInfo);

		if (data.userName) {
			return res.json({
				status: 200,
				msg: 'information processed',
				userInfo: {
					name: data.userName,
					email: data.userEmail,
					img: req.file.filename
				}
			})	
		}

		return res.json({
			status: 400,
			msg: 'problems with the data',
			errosMsg: 'Required data not sended'
		})

		// Clase que viene:
		/* 
			- Middleware de 2da validación del formulario. 				
				• Validar las mismas cosas aquí que en el frontend.
		*/
	}
}