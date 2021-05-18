module.exports = (sequelize, dataTypes) => {
	// Definir la estructura del modelo
	const user = sequelize.define(
		// 1. nombre del modelo - cómo vamos a reconocer a este modelo por fuera de este archivo
		'user',
		// 2. columnas a las que queremos tener acceso
		{
			userName: dataTypes.STRING(),
			email: dataTypes.STRING(),
			avatar: dataTypes.STRING(),
		}
	)

	return user;
}