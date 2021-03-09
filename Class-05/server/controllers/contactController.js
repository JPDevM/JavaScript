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
			- Mensaje devolución del form. de parte del server.
			- Middleware de 2da validación del formulario. 				
				• Validar las mismas cosas aquí que en el frontend.
		*/
	}
}