import enlargeImgs, { caca as objetito } from './modalImages.js';

console.log(objetito.name);
console.log(objetito.age);

// Cuando las imágenes y el contenido lleguen
enlargeImgs();

// Add active-input class to input fields
const inputFields = Array.from( document.querySelectorAll('.second-level-nav input') );
// Iteramos el array de inputs
inputFields.forEach(oneInput => {
	// Buscamos al padre <li> del input que recibió el focus
	const liParent = oneInput.parentElement;

	// Le asignamos a cada input el evento focus
	oneInput.addEventListener('focus', () => {
		// Al padre del input que tiene el foco le asignamos la clase "active-input"
		liParent.classList.add('active-input');
	});
	
	// Le asignamos a cada input el evento blur
	oneInput.addEventListener('blur', () => {
		// Al padre del input que tiene el foco le quitamos la clase "active-input"
		liParent.classList.remove('active-input');
	});
})

// Github Auth response
// 1. Capturar el código que recibimos después de la redirección
const queryString = new URLSearchParams(location.search);
const githubCode = queryString.get('code');

// 2. Enviar la petición vía FETCH con POST a Github
const url = `https://github.com/login/oauth/access_token`;
const urlBody = {
	client_id: '6371f15302a00470d959',
	client_secret: '9b14cf289dd33b8cacd3d0f2cc65b965769b0ebf',
	code: githubCode
}

if (githubCode) {
	const myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');

	const raw = JSON.stringify({ 
		client_id: '6371f15302a00470d959', 
		client_secret: '9b14cf289dd33b8cacd3d0f2cc65b965769b0ebf', 
		code: githubCode
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("https://github.com/login/oauth/access_token", requestOptions)
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}


// Capturar todos los botones con data-btn="activeModal"
const activeModalBtns = Array.from(document.querySelectorAll('[data-btn=activeModal]'));
// Iteramos el array de botones, para aplicarle a cada uno de ellos un evento
activeModalBtns.forEach(oneBtn => {
	oneBtn.addEventListener('click', () => { 
		// Capturamos al ancestro
		const grandParent = oneBtn.parentElement.parentElement;
		// Capturamos el username
		const userName = grandParent.querySelector('.user').innerText;
		console.log(userName);
		// Capturamos el modal
		const modalBox = document.querySelector('.modal');
		// Mostramos el modal
		modalBox.style.display = 'block';
		// TEMP - cerrar el modal
		modalBox.addEventListener('click', () => {
			modalBox.style.display = 'none';
		})
	});
});


