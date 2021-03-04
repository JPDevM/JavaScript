let contactForm = document.querySelector('#contactForm');
let formFields = Array.from(contactForm.elements); // Convertimos a array
formFields.pop(); // Sacamos el botón

// Función que controla si el campo está vacío
const isEmpty = e => {
	let input = e.target; // Capturamos al campo
	let inputValue = input.value; // Capturamos el valor del campo

	// Si el campo está vacío
	if (inputValue === '') {
		// si SÍ está vacío el campo, le aplicamos una clase llama "is-invalid"
		input.classList.add('is-invalid');
		// Seteamos el mensaje de error
		feedbackMsg(
			input,
			`Escribí tu <b>${input.dataset.name}</b>`,
			'invalid-feedback'
		);
	} else {
		// si NO está vacío, le quitamos la clase "is-invalid"
		input.classList.remove('is-invalid');
		// Seteamos el mensaje de exito
		feedbackMsg(
			input,
			`¡<b>${input.value}</b>, está perfecto!`,
			'valid-feedback'
		);
	}
}

const isEmail = e => {
	let input = e.target;
	let inputValue = input.value;
	const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	// Si no pasa el test de ser un formato de correo electrónico
	if(!regex.test(inputValue)) {
		// si NO es un formato de correo electrónico
		input.classList.add('is-invalid');
		// Seteamos el mensaje de error
		feedbackMsg(
			input,
			`<b>${inputValue}</b> no es un formato de correo válido`,
			'invalid-feedback'
		);
	}
}

const feedbackMsg = (field, msg, className) => {
	let spanTag = field.nextElementSibling; // Capturamos al hermano que está por debajo
	spanTag.innerHTML = msg;
	if (spanTag.classList.contains('invalid-feedback')) {
		spanTag.classList.remove('invalid-feedback');
	}
	if (spanTag.classList.contains('valid-feedback')) {
		spanTag.classList.remove('valid-feedback');
	}
	spanTag.classList.add(className);
}

formFields.forEach(field => {
	if ( field.type != 'radio' && field.type != 'checkbox' ) {
		field.addEventListener('blur', isEmpty);
	
		// Al campo de email, le asignamos lo siguiente
		if (field.name === 'userEmail' && field.value !== '') {
			field.addEventListener('blur', isEmail);
		}
	}
});

// Radio buttons
const radioButtons = [...document.querySelectorAll('input[name=conditions]')];

radioButtons.forEach(radioButton => {
	radioButton.addEventListener('change', e => {
		let aceptConditions = e.target.value;
		if (aceptConditions === 'true') {
			console.log('Aceptó');
		} else {
			console.log('No aceptó');
		}
	})
})

// Checkboxes
const checkBoxes = [...document.querySelectorAll('input[name=gender]')];
let genderValues = [];

checkBoxes.forEach(checkBox => {
	checkBox.addEventListener('change', e => {
		let checkboxValue = e.target.value;
		if (checkBox.checked && !genderValues.includes(checkboxValue)) {
			genderValues.push(checkboxValue);
		} else {
			// Hacer un filter, para eliminar el valor agregado
			genderValues = genderValues.filter(gender => gender != checkboxValue);
		}
		console.log(genderValues);
	})
})

// Submit del formulario
contactForm.addEventListener('submit', e => {
	// Evitar que se envíe el formulario porque se refresca la página
	e.preventDefault();

	let infoForm = {};

	formFields.forEach(field => {
		infoForm[field.name] = field.value;
	});

	// Enviar la data al backend / server
	fetch('http://localhost:3000/contact', { 
		method: 'POST',
		body: JSON.stringify(infoForm), 
		headers: {
			'Content-Type': 'application/json',
		}
	})
		.then(response => response.json())
		.then(data => console.log(data))
})