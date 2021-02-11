/*
	Queremos que al dar click sobres este botón, cambie el estilo a LIGHT THEME
*/ 

/*
	Eventos en JS
	Son los comportamientos que ejecuta un usuario dentro de la página. Tenemos eventos:

	• del teclado
	• del mouse (más comunes)
	• de la ventana

	Para aplicar un evento, se tiene que hacer sobre un elemento del DOM. Y existen dos formas de aplicarlo:

	a. element.onclick = function () {...}
	b. element.addEventListener('click', function () {...});
*/ 

// btnTheme.onclick = function () {
// 	console.log('¡Hiciste click!');
// }

// btnTheme.onclick = function () {
// 	console.log('¡Volviste a hacer click!');
// }

// btnTheme.addEventListener('click', function () {
// 	console.log('¡Hiciste click!');
// }); 

// btnTheme.addEventListener('click', function () {
// 	console.log('¡Volviste a hacer click!');
// });

window.addEventListener('load', () => {
	const theme = document.querySelector('#theme');
	const btnTheme = document.querySelector('#themeCSS');

	btnTheme.addEventListener('click', function (event) {
		// let actualTheme = theme.href;
		// console.log(actualTheme);

		// let actualThemeArray = actualTheme.split('/');
		// console.log(actualThemeArray);
		// console.log(actualThemeArray.includes('light-theme.css'));

		// let finalTheme = actualThemeArray.pop();
		// console.log(finalTheme);

		// let isLight = finalTheme.includes('light');
		// console.log(isLight);

		let actualTheme = theme.href.split('/').pop();
		// console.log(actualTheme);

		if (actualTheme.includes('light')) {
			theme.setAttribute('href', 'css/dark-theme.css');
			event.target.innerText = 'Light Theme';
		} else {
			theme.setAttribute('href', 'css/light-theme.css');
			event.target.innerText = 'Dark Theme';
		}
	});

	const msgContainer = document.querySelector('#msg');

	const printMessageHandler = event => {
		console.log(event.target);
		if (msgContainer) {
			msgContainer.innerText = `${event.target.dataset.msg}`;
		}
	}

	const dblClickBtn = document.querySelector('#dblClick');
	dblClickBtn.addEventListener('dblclick', printMessageHandler)

	const mouseOverBtn = document.querySelector('#mouseOver');
	mouseOverBtn.addEventListener('mouseover', printMessageHandler);

	const mouseOutBtn = document.querySelector('#mouseOut');
	mouseOutBtn.addEventListener('mouseout', printMessageHandler)
})
