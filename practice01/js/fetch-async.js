// Async - Await
const getPrices = async () => {
	let apiCall = await fetch('https://euroblue.com.ar').then((response) => response.text());
	return apiCall;
}


getPrices()
	.then(data => {
		let finalData = data.split('$');
		let euroBlueCompra = Number(finalData[1].split(`</`).shift());
		let euroBlueVenta = Number(finalData[2].split(`</`).shift());
		let euroBluePromedio = (euroBlueCompra + euroBlueVenta) / 2;

		console.log(euroBlueCompra, euroBlueVenta, euroBluePromedio);
	});
