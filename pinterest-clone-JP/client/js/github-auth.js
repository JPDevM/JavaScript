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