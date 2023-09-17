import Swal from 'sweetalert2';

const inputCoin = document.querySelector('input');

const titleCoin = document.querySelector('.coin');

const listCoins = document.querySelector('#div-container');

function fetchCoins(coin) {
  const url = `https://api.exchangerate.host/latest?base=${coin}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (coin !== data.base) {
        Swal.fire(
          'Ops ...',
          'Moeda não existente!',
          'error',
        );
        return false;
      }

      return data.rates;
    });
}

function renderCoins(result) {
  listCoins.innerHTML = '';

  const coinsArray = Object.entries(result);
  console.log(coinsArray);

  coinsArray.forEach((coin) => {
    const [coinName, coinValue] = coin;

    const li = document.createElement('li');
    li.textContent = `🪙 ${coinName} - ${coinValue.toFixed(2)}`;
    li.style.listStyle = 'none';
    li.style.backgroundColor = 'white';
    li.style.opacity = '0.5';
    li.style.padding = '5px';
    li.style.margin = '5px';
    listCoins.appendChild(li);
  });
}

function handleSearch(event) {
  event.preventDefault();

  const coin = inputCoin.value.toUpperCase();

  if (!coin) {
    console.log('erro');

    Swal.fire(
      'Ops ...',
      'Você precisa passar uma moeda',
      'error',
    );
    return;
  }

  titleCoin.innerHTML = `Valores referentes a 1 ${coin}`;

  fetchCoins(coin)
    .then((result) => renderCoins(result));
}

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', handleSearch);
