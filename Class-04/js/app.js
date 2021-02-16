const btn01 = document.querySelector('#btn01');

// Pasando argumentos sin el evento
// const sayHello = name => console.log(`Hi ${name}`);
// btn01.addEventListener('click', sayHello.bind(null, 'Juan Pa'));

const sayHello = (name, e) => {
	console.log(`Hi ${name}`);
	console.log(e.target.dataset);
}
btn01.addEventListener('click', sayHello.bind(null, 'Juan Pa'));
btn01.addEventListener('click', function (e) {
	return sayHello('Juan Pa', e)
});

const anchor01 = document.querySelector('a');
anchor01.addEventListener('click', e => {
	e.preventDefault();
	console.log('Hiciste clic en el enlace');
});

// function createCar (brandName, modelName, fullYear) {
// 	if (!fullYear) {
// 		throw new Error('El año es obligatorio');
// 	}
// 	this.brand = brandName;
// 	this.model = modelName;
// 	this.year = fullYear;
// }

const error = () => {
	throw new Error('El año es obligatorio');
}

function createCar(brandName, modelName, fullYear) {
	if (!fullYear) {
		throw new Error('El año es obligatorio');
	}
	this.brand = brandName;
	this.model = modelName;
	this.year = fullYear;
}

const car01 = new createCar('Fiat', 'Uno', 2020);
const car02 = new createCar('Renault', 'Megane');

console.log(car01);
console.log(car02);