const euroBlueCompra = null;
const euroBlueVenta = null;
const euroBluePromedio = null;

let actualCurrency = 'AR';

const fromText = document.querySelector('.from');
const toText = document.querySelector('.to');
const btnChangeCurrency = document.querySelector('#invertCurrency');
const conversionTitle = document.querySelector('#conversionTitle');

conversionTitle.innerHTML = 'Conversión de <span>0.00</span> AR$ a Euros';

const changeCurrency = () => {
	switch (actualCurrency) {
		case 'AR':
			fromText.innerText = 'Euro';
			toText.innerText = 'Peso';
			actualCurrency = 'EU';
			conversionTitle.innerHTML = 'Conversión de <span>0.00</span> Euros a AR$';
			break;
		case 'EU':
			fromText.innerText = 'Peso';
			toText.innerText = 'Euro';
			actualCurrency = 'AR';
			conversionTitle.innerHTML = 'Conversión de <span>0.00</span> AR$ a Euros';
			break;
	}
}

btnChangeCurrency.addEventListener('click', changeCurrency);

const amountToChange = document.querySelector('#amountToChange');

const setAmount = e => {
	let input = e.target;
	let amount = input.value;
	
	let test = amount.split('').pop();
	if (isNaN(test)) {
		console.log(amount);
		// let x = amount.split('');
		// x.pop();
		// console.log(x);
		// let onlyNumbers = x.join('');
		// console.log(onlyNumbers);
	}
	
	let amountTag = conversionTitle.querySelector('span');
	amountTag.innerText = amount ? amount : '0.00';
}

amountToChange.addEventListener('input', setAmount)