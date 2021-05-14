import enlargeImgs from './modalImages.js';

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


fetch('http://localhost:3000/images')
	.then(response => response.json())
	.then(images => {
		console.log(images);
	})
	.catch(error => log.error(error))