import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then(res => res.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();
  const teste = `https://dummyjson.com/posts/user/${usersSelect.value}`
  fetch(teste)
  .then(response => response.json())
  .then((data) => {
    fillPosts(data.posts)
    const [featuredPost] = data.posts;
    const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;
    return fetch(COMMENTS_API);
  })
  .then((res) => res.json())
  .then((data) => {
    fillFeaturedPostComments(data.comments);
  })
  .catch((error) => {
    fillErrorMessage('Erro ao recuperar informações');
    console.log(error.message);
  })

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
