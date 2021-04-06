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