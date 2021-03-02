// Change header and title
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
};
btnChangeCurrency.addEventListener('click', changeCurrency);

// - - - - - - - - - - - - - - - - - - - - -
// Set title and result.
const amountToChange = document.querySelector('#amountToChange');
const setAmount = (e) => {
  let input = e.target;
  let amount = input.value;

  // Title value
  let amountTagTitle = conversionTitle.querySelector('span');
  amountTagTitle.innerText = amount ? amount : '0.00';

  // Result value
  let amountTagResult = conversionTitle.querySelector('span');
  amountTagResult.innerText = amount ? amount : '0.00';

  // Set result
  document.querySelector('#ebAmount').innerHTML = amount ? amount : '0,00';
};
amountToChange.addEventListener('input', setAmount);

// - - - -
// Set Date: hh:mm hs. del DD-MM-YYYY
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

// - - - - - - - - - - - - -
// Get and Set euro value.
let euroBlueCompra = null;
let euroBlueVenta = null;
let euroBluePromedio = null;
fetch('https://euroblue.com.ar')
  .then((response) => response.text())
  .then((data) => {
    let finalData = data.split('$');
    euroBlueCompra = Number(finalData[1].split(`</`).shift());
    euroBlueVenta = Number(finalData[2].split(`</`).shift());
    euroBluePromedio = (euroBlueCompra + euroBlueVenta) / 2;

    euroValue(euroBlueCompra, euroBlueVenta, euroBluePromedio);
  });

// - - - - - - - - - - - - -
// Put euro value.
const euroValue = (compra, venta, promedio) => {
  document.querySelector('#ebCompra').innerHTML = compra ? compra : '0,00';
  document.querySelector('#ebVenta').innerHTML = venta ? venta : '0,00';
  document.querySelector('#ebMedio').innerHTML = promedio ? promedio : '0,00';
  document.querySelector('#ebMedio2').innerHTML = promedio ? promedio : '0,00';
};

// Put Final result

// Put Result
let conversionResult =
  '<p>' +
  'COMPRA: AR$ <span id="ebCompra"> Obteniendo valor.</span> <br>' +
  'VENTA: AR$ <span id="ebVenta"> Obteniendo valor.</span> <br>' +
  'FUENTE: www.euroblue.com.ar a las ' +
  date +
  '<br><br>' +
  'Medio: AR$ <span id="ebMedio"> Obteniendo valor.</span> <br>' +
  '€ a AR$: AR$ <span id="ebAmount">...</span>' +
  ' / AR$ <span id="ebMedio2">...</span> <br>' +
  'Quedarían: € * <span id="ebFinal"> calculando...</span>*' +
  '</p>';

document.getElementById('conversionResult').innerHTML = conversionResult;
console.log(document.getElementById('conversionResult').innerHTML);

// Copy btn
function copyTextToClipboard() {
  /* Select the text field */
  conversionResult.select();
  conversionResult.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  alert('Copied the text: ' + conversionResult.value);
}
