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
	// myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({ 
		client_id: '6371f15302a00470d959', 
		client_secret: '9b14cf289dd33b8cacd3d0f2cc65b965769b0ebf', 
		code: '07ba1b493c6b6251e567' 
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