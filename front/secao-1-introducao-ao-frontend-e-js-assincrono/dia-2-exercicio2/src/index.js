const btnDog = document.querySelector('#button-dog');
const btnCat = document.querySelector('#button-cat');
const btnSurprise = document.querySelector('#button-surprise');
const img = document.querySelector('img');

const fetchDog = () => fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => img.src = data.message);

btnDog.addEventListener('click', (event) => {
  event.preventDefault();

  fetchDog()
});

const fetchCat = () => fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => img.src = data[0].url);

btnCat.addEventListener('click', (event) => {
  event.preventDefault();
  
  fetchCat();
});

btnSurprise.addEventListener('click', (event) => {
  event.preventDefault();

  Promise.race([
    fetchDog(),
    fetchCat(),
  ])
    .then(response => response);
});
