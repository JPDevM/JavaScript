let contactForm = document.querySelector('#contactForm');
let formFields = Array.from(contactForm.elements); // Convertimos a array
formFields.pop(); // Sacamos el botón

// Función que controla si el campo está vacío
const isEmpty = (e) => {
	let input = e.target; // Capturamos al campo
	let inputValue = input.value; // Capturamos el valor del campo

	// Si el campo está vacío
	if (inputValue === '') {
		// si SÍ está vacío el campo, le aplicamos una clase llama "is-invalid"
		input.classList.add('is-invalid');
	} else {
		// si NO está vacío, le quitamos la clase "is-invalid"
		input.classList.remove('is-invalid');
	}

	feedbackMsg(input, 'Campo obligatorio', 'invalid-feedback');
}

const feedbackMsg = (field, msg, className) => {
	let spanTag = field.nextElementSibling; // Capturamos al hermano que está por debajo
	spanTag.innerText = msg;
	spanTag.classList.add(className);
}

formFields.forEach(field => {
	field.addEventListener('blur', isEmpty);
})