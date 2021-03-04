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
  let amount = Number(input.value);
  let middleValue = Number(input.dataset.middle);
  let finalValue = amount / middleValue;

  // Title value
  let amountTagTitle = conversionTitle.querySelector('span');
  amountTagTitle.innerText = amount ? amount : '0.00';

  // Set result
  document.querySelector('#ebFinal').innerText = finalValue > 0 ? finalValue.toFixed(2) : '0,00';
};
amountToChange.addEventListener('input', setAmount);

// - - - -
// Set Date: hh:mm hs. del DD-MM-YYYY
let date = new Date();

date = `${date.getHours()}:${date.getMinutes()}hs del ${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;

// - - - - - - - - - - - - -
// Get and Set euro value.

let prom = fetch('https://euroblue.com.ar')
  .then((response) => response.text())
  .then((data) => {
    let finalData = data.split('$');
    let euroBlueCompra = Number(finalData[1].split(`</`).shift());
    let euroBlueVenta = Number(finalData[2].split(`</`).shift());
    let euroBluePromedio = (euroBlueCompra + euroBlueVenta) / 2;

    conversionResult(euroBlueCompra, euroBlueVenta, euroBluePromedio);

    amountToChange.removeAttribute('disabled');
    amountToChange.setAttribute('data-middle', euroBluePromedio);
  });

<<<<<<< HEAD
// prom().then((value1) => {
//   console.log(value1);
// });
=======
>>>>>>> 75d349cc1916b69d7ba56032f672fdd2e6c706b0
// - - - - - - - - - - - - -
// Put Final result

// Put Result
const conversionResult = (compra, venta, promedio) => {
  // console.log(compra, venta, promedio); // 174 176 175
  let conversionResultText = `<p>COMPRA: AR$ ${compra}<br>VENTA: AR$ ${venta}<br>FUENTE: www.euroblue.com.ar a las ${date}<br><br>Medio: AR$ ${promedio}<br>Quedarían: € *<span id="ebFinal"> calculando...</span>*</p>`;

  document.getElementById('conversionResult').innerHTML = conversionResultText;

  return [compra, venta, promedio];
};

// - - - - - - - - - - - - -
// Copy btn
function copyTextToClipboard() {
  let conversionResult = document.getElementById('conversionResult');
  let input = `<input id="fakeInput" type="text" value="${conversionResult.innerText}" style="display: none;">`;
  conversionResult.insertAdjacentHTML('beforeend', input);

  /* Select the text field */
  let fakeInput = document.getElementById('fakeInput');
  fakeInput.select();
  fakeInput.setSelectionRange(0, 99999); /* For mobile devices */

  // /* Copy the text inside the text field */
  document.execCommand('copy');

  // /* Alert the copied text */
  alert('Copied the text: ' + fakeInput.value);

  setTimeout(() => {
    conversionResult.removeChild(fakeInput);
  }, 3000);
}
