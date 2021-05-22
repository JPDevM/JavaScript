import enlargeImgs from './modalImages.js';

const getImages = () => {
	const gridContainer = document.querySelector('.grid');

	fetch('http://localhost:3000/images')
		.then(response => response.json())
		.then(images => {

			for (const oneImage of images) {
				let imageHTML = `
					<div class="grid-item">
						<img src="${oneImage.urlPath}">
						<div class="descriptionBox">
							<p class="desciption">
								${oneImage.description}
							</p>
							<button data-btn="activeModal">···</button>
						</div>
						<div class="user">
							<img class="userAvatar" src="img/${oneImage.user.avatar}">
							<p class="name">${oneImage.user.userName}</p>
						</div>
					</div>
				`;
				gridContainer.insertAdjacentHTML('beforeend', imageHTML);
			}

			new Masonry(gridContainer, {
				// options
				itemSelector: '.grid-item',
				gutter: 6
			});

			// Cuando las imágenes y el contenido lleguen, les aplico el comportamiento de enlarge
			enlargeImgs();
		})
		.catch(error => console.log(error))
}

export default getImages;