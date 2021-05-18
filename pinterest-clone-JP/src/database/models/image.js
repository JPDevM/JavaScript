module.exports = (sequelize, dataTypes) => {
	// Definir la estructura del modelo
	const image = sequelize.define(
		// 1. nombre del modelo - cómo vamos a reconocer a este modelo por fuera de este archivo
		'image',
		// 2. columnas a las que queremos tener acceso
		{
			urlPath: dataTypes.STRING(),
			description: dataTypes.STRING(),
			userId: dataTypes.NUMBER,
		}
	)

	image.associate = (models) => {
		image.belongsTo(models.user, { 
			as: 'user',
			foreignKey: 'userId'
		})
	}

	return image;
}