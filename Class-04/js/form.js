const form = document.querySelector('form');
const errorMsg = document.querySelector('#errorMsg');

const validateEmpty = e => {
	let self = e.target;
	if (self.value.trim() === '') {
		self.style.border = 'solid 1px red';
	} else {
		self.style.border = 'solid 1px green';
	}
}

const nameInput = form.username;
nameInput.addEventListener('blur', validateEmpty);

const msgInput = form.msg;
msgInput.addEventListener('blur', validateEmpty);

form.addEventListener('submit', e => {
	e.preventDefault();

	let usernameValue = form.username.value.trim();
	let msgValue = form.msg.value.trim();

	if (!usernameValue || msgValue === '') {
		errorMsg.innerText = 'Los campos no puede estar vacíos';
	}
	
	if (msgValue != '' && msgValue.length < 10) {
		errorMsg.innerText = 'Dame un poco más de contexto';
	}

	// Acá va la petición asíncrona para envíar la data
})