module.exports = {
	processContact: (req, res) => {
		console.log(req.body);

		if (req.body.userName) {
			return res.json({
				username: `Gracias ${req.body.userName}, mensaje recibido`
			})	
		}

		// Clase que viene:
		/* 
			- Recibir mensaje de exito en el frontend y mostrarlo
			- Reset del form
		*/
	}
}