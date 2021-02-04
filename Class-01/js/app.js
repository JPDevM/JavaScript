/* 
	D.O.M.
	Document Object Model

	Para JS todo lo que está en el HTML es un objeto que también recibe el nombre de NODO.

	JS nos provee de 2 objetos principales:
		- window
		- document

	• Selectores de DOM
		a. document.getElementById()
		b. document.getElementsByTagName()
		b. document.querySelector()
		b. document.querySelectorAll()
	
	• Manipulando el contenido de un Nodo
		a. innerHTML
		b. innerText
		c. insertAdjacentText(position, content)
		d. insertAdjacentHTML(position, content)
			position => 'beforebegin', 'beforeend', 'afterbegin', 'afterend'

	• Accediendo a los atributos de un nodo
		a. getAttribute(attrName)
		b. setAttribute(attrName, attrValue)

	• Manipulando el CSS de un nodo
		element.style.color = 'red'
*/ 

const specialP = document.getElementById('special-p');
// console.log(specialP.innerHTML); // String
// console.log(specialP.innerText); // String

specialP.innerHTML += ' <em>Esto es un texto en cursiva</em>';
specialP.insertAdjacentHTML('beforebegin', '<h2>Hello world</h2>')

let newAnchor = document.createElement('a');
newAnchor.innerText = 'Enlace 6';
newAnchor.setAttribute('href', '#');
newAnchor.setAttribute('title', 'f');

document
	.getElementById('anchors-container')
	.insertAdjacentElement('beforeend', newAnchor);

document
	.getElementById('anchors-container')
	.insertAdjacentHTML('beforeend', ' <a href="#" title="g">Enlace 7</a>');

const anchors = Array.from(document.getElementsByTagName('a'));
anchors.forEach(oneAnchor => {
	console.log(oneAnchor.innerText);
	console.log(oneAnchor.getAttribute('title'));
})

specialP.style.color = 'red';
specialP.style.fontSize = '10px';
specialP.style.padding = '20px';
console.log(specialP.getAttribute('style'));