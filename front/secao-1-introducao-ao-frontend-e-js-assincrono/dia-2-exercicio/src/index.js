import Swal from "sweetalert2";

const btn = document.querySelector('#button');
const p = document.querySelector('p');
const img = document.querySelector('img');


btn.addEventListener('click', (event) => {
  event.preventDefault();

  img.src = '';
  p.innerText = '';

  const randomNumber = Math.floor(Math.random() * 800) + 1;

  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber}.json`)
    .then((response) => response.json())
    .then(data => {
      img.src = data.images.md;
      p.innerText = data.name;
    })
    .catch(() => Swal.fire({
      icon: 'error',
      title: 'Heroi não encontrado!',
      text: 'Não fique triste',
      footer: 'Tente novamente mais tarde',
    })
    )
})