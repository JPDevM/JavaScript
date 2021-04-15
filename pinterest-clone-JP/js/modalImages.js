const generateEnlargeFunction = () => {
	// Capturamos todas las imágenes que están dentro del .grid-item
	const gridImages = Array.from(document.querySelectorAll('.grid-item > img'));
	// Callback para el foreach
	const enlargeImagesHandler = oneImage => {
		// A cada imagen le asignamos el evento click
		oneImage.addEventListener('click', e => {
			// Sacarle el scroll al HTML
			document.documentElement.style.overflow = 'hidden';
			// Obtenemos la URL de la imagen
			const imgURL = e.target.getAttribute('src');
			// Obtenemos el div donde se insertará la imagen
			const modalImg = document.querySelector('.modal-image');
			// Implementamos el display=block
			modalImg.style.display = 'block';
			// Generamos el HTML para el modal
			const modalInnerHTML = `
				<img src=${imgURL} class="full-image">
				<button class="full-image-close">
					<i class="fa fa-times"></i>
				</button>
			`;
			// Insertamos la imagen en el modal-image
			modalImg.insertAdjacentHTML('beforeend', modalInnerHTML);
			// Obtenemos el botón para cerrar
			const btnClose = modalImg.querySelector('.full-image-close');
			// Asignamos el evento para cerrar el modal-image
			btnClose.addEventListener('click', () => {
				// le asignamos de vuelta display:none; al modal-image
				modalImg.style.display = 'none';
				// Vaciamos el contenido de nuevo
				modalImg.innerHTML = '';
				// Agregarle el scroll al HTML
				document.documentElement.style.overflow = 'auto';
			})
		})
	}

	// Iteramos el array de las imágenes y le pasamos el handlers
	gridImages.forEach(enlargeImagesHandler);
}

export const caca = {
	name: 'Coquito',
	age: 25
}

// Esto que exportadas default lo podés renombrar en el import
export default generateEnlargeFunction;