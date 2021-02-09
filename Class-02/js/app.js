/*
	D.O.M.

	• Selectores
		- document.querySelector()
		- document.querySelectorAll()
	
	Todo selector de JS DOM retorna un listado o colección de nodos.

	• CSS en el DOM
		- classList.add()
		- classList.remove()
		- classList.toggle()
		- classList.contains()
*/ 

// const navLinks = Array.from(document.querySelectorAll('.navbar-links a'));
const navLinks = [...document.querySelectorAll('.navbar-links a')];
navLinks.forEach(function (oneLink, index) {
	oneLink.innerHTML += ' Go';
	oneLink.classList.add('active');
	if (index === 2) {
		oneLink.classList.remove('active');
	}
})

// const body = document.querySelector('body');
const body = document.body;
body.classList.toggle('home');

if (body.classList.contains('home')) {
	console.log('El body tiene la clase home');
}

const btn = document.querySelector('#btn');
btn.onclick = function () {
	body.classList.toggle('home');
}