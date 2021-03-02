let euroBlueCompra = null;
let euroBlueVenta = null;
let euroBluePromedio = null;

let actualCurrency = 'AR';

const fromText = document.querySelector('.from');
const toText = document.querySelector('.to');
const btnChangeCurrency = document.querySelector('#invertCurrency');
const conversionTitle = document.querySelector('#conversionTitle');

conversionTitle.innerHTML = 'Conversión de <span>0.00</span> AR$ a Euros';

// Cambiar el Header y el Título
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
};

// Obtener valor del euro
fetch('https://euroblue.com.ar')
  .then((response) => response.text())
  .then((data) => {
    let finalData = data.split('$');
    euroBlueCompra = Number(finalData[1].split(`</`).shift());
    euroBlueVenta = Number(finalData[2].split(`</`).shift());
  });

btnChangeCurrency.addEventListener('click', changeCurrency);

const amountToChange = document.querySelector('#amountToChange');

// Setea el valor del Título y del Resultado
const setAmount = (e) => {
  let input = e.target;
  let amount = input.value;

  // Valor del Título
  let amountTagTitle = conversionTitle.querySelector('span');
  amountTagTitle.innerText = amount ? amount : '0.00';

  // Valor del Resultado
  let amountTagResult = conversionTitle.querySelector('span');
  amountTagResult.innerText = amount ? amount : '0.00';
};

amountToChange.addEventListener('input', setAmount);

// Set Date
let date = new Date();
date =
  date.getHours() +
  ':' +
  date.getMinutes() +
  'hs. del ' +
  date.getDate() +
  '-' +
  (date.getMonth() + 1) +
  '-' +
  date.getFullYear();

// Put Result
euroBluePromedio = (euroBlueCompra + euroBlueVenta) / 2;
let conversionResult =
  '<p> COMPRA: AR$ ' +
  euroBlueCompra +
  '<br> VENTA: AR$ ' +
  euroBlueVenta +
  ' <br> FUENTE: www.euroblue.com.ar a las ' +
  date +
  '.<br><br> Medio: AR$ ' +
  euroBluePromedio +
  '<br> € a AR$: AR$ ' +
  euroBluePromedio +
  ' / AR$ ' +
  +'<br>Quedarían: € *' +
  +'*</p>';

document.getElementById('conversionResult').innerHTML = conversionResult;
console.log(document.getElementById('conversionResult').innerHTML);
