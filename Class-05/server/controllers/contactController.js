module.exports = {
	processContact: (req, res) => {
		console.log(req.body);

		if (req.body.userName) {
			return res.json({
				status: 200,
				msg: 'information processed',
				userInfo: {
					name: req.body.userName,
					email: req.body.userEmail
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