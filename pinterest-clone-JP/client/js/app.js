import getImages from './getImages.js';

// Obtengo las imágenes que tengo en la DB
getImages();

// Add active-input class to input fields
const inputFields = Array.from(
  document.querySelectorAll('.second-level-nav input')
);
// Iteramos el array de inputs
inputFields.forEach((oneInput) => {
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
});

// Capturar todos los botones con data-btn="activeModal"
const activeModalBtns = Array.from(
  document.querySelectorAll('[data-btn=activeModal]')
);

// Iteramos el array de botones, para aplicarle a cada uno de ellos un evento
activeModalBtns.forEach((oneBtn) => {
  oneBtn.addEventListener('click', () => {
    // Capturamos al ancestro
    const grandParent = oneBtn.parentElement.parentElement;
    // Capturamos el username
    const userName = grandParent.querySelector('.user').innerText;
    console.log(userName);
    // Capturamos el modal
    const modalBox = document.querySelector('.modal');
    // Mostramos el modal
    modalBox.style.display = 'block';
    // TEMP - cerrar el modal
    modalBox.addEventListener('click', () => {
      modalBox.style.display = 'none';
    });
  });
});

// Process for storing images
const saveForm = document.querySelector('#saveForm');
const imageSaved = document.querySelector('.image-saved');

saveForm.addEventListener('submit', (e) => {
  e.preventDefault();

  imageSaved.classList.add('is-visible');
  // Consistency: the names of the variables of the object (urlPath) must be called the same as in the db.
  const imageData = {
    urlPath: saveForm.urlPath.value,
    description: saveForm.description.value,
  };

  fetch('http://localhost:3000/images', {
    method: 'POST',
    body: JSON.stringify(imageData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      imageSaved.classList.remove('is-visible');
      saveForm.reset();
      document.querySelector('.grid').innerHTML = '';
      getImages();
    })
    .catch((error) => {
      imageSaved.classList.remove('is-visible');
      console.log(error);
    });
});
