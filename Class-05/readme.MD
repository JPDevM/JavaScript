# Pasos a seguir

### Estructura HTML

1. Dentro del `<form>` lo importante será especificar el `enctype=""`.
2. En lo campos del formulario lo más importante es el atributo `name`.
3. Dejar preparado el lugar en donde vamos a poner los textos que resulten de la validación


### Javascript - Front - Validaciones

1. Este archivo de JS cumplirá con dos objetivos.
	1. Validar el formulario
	2. Enviar el formulario al servidor
2. Lo inicial para validar será capturar el `<form>` y los campos del mismo.

```js
let contactForm = document.querySelector('#contactForm');
let formFields = Array.from(contactForm.elements); // convertimos en array
formFields.pop(); // Sacamos el botón
```

3. Crear la funciones necesarias para validar la información.
4. Iterar el array de campos y asignarle a cada campo el evento correspondiente para validar su información.

> Los eventos para validar generalmente son `blur` (cuando el cursor sale del campo) y el `change` (cuando el cursor sale del campo y hubo cambios)

### Javascript - Front - Envío del formulario

1. El envío de los datos de un formulario siempre se da sobre el objeto formulario. Implementando el evento `submit`.

```js
let contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', cb);
```

2. Importante. Es necesario prevenir que se envíe el formulario. Sino esto hará que se refresque la página. Ya que vamos a enviar los datos de manera asincrónica a un server / endpoint y necesitas evitar que el documento se refresque o que nos lleve a otro lugar.

```js
contactForm.addEventListener('submit', e => {
	e.preventDefault();
});
```

3. Después de esto, aquí arranca el proceso de envío en sí. Aquí tenés que armar la información que vas a enviar.

4. Para el envío de la data del formulario vamos a utilizar `fetch` para envíar las data al servidor

```js
fetch('endPoint')
	.then(response => response.json())
	.then(serverResponse => {
		// Código que se ejecuta cuando la data se envía al server
	})
```

## Configurando el servidor con Express

1. Lo primero será instalar Express dentro de nuestro entorno

`npm i express`

2. Configuramos el servidor de Express:

```js
const express = require('express');
const server = express();

// Sistema de rutas
const contactRouter = require('./routes/contact');

// Configurar la ruta
server.use('/contact', contactRouter);

// Se levanta el servidor
server.listen(3000, () => console.log('Servidor andando en el puerto 3000'));
```

3. Crear el archivo *router*:

```js
const express = require('express');
const router = express.Router();

const controller = require('../controllers/contactController');

router.post('/', controller.processContact);

module.exports = router;
```

4. Crear el *controller*:

```js
module.exports = {
	processContact: (req, res) => {
		// Acá va toda la lógica de procesamiento de la información
	}
}
```

5. Configurar cómo va a procesar la información nuestro servidor:

```js
server.use(express.json());
```

6. No olvidar poner los *headers* en la petición FETCH

```js
fetch('endPoint', { 
	method: 'POST', 
	body: '...',
	headers: { 'Content-Type': 'application/json' }
})
```

7. Cuando necesitamos enviar al server información binaria (con archivos adjuntos) las cosas cambian un poco. 
	1. Primero, no tendremos que definir los headers en el FETCH
	2. Vamos a tener que usar un middleware que sepa descodificar la data que viene del front con una librería llamada **multer**
	3. Pasar el middleware de **multer** en la ruta

8. Instalando multer:

```
npm i multer
```

9. Configurando multer:

```js
// En el archivo router es en dónde hacemos todo esto:
const multer = require('multer');

const multerStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, 'img_' + Date.now() + '-' + file.originalname);
	}
});

const upload = multer({ storage: multerStorage });

router.post('/', upload.single('attachment'), controller.processContact);
```

> Habiendo hecho lo anterior, ahora en el `req` vamos a tener dos propiedades para acceder a la información: `req.body` y `req.file`