import {nanoid} from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const btnPassword = document.querySelector('button');
const h2 = document.querySelector('h2');

btnPassword.addEventListener('click', () => {
  const randomPassword = nanoid();
  h2.innerHTML = randomPassword;
});

h2.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada');
});
