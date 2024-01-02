import { fetchPosts } from './requests.js';
import { changeCardsView } from './cardsView.js';
import { createCard } from './createCard.js';

const cardsContainer = document.querySelector('.interesting-articles__cards');

fetchPosts().then((posts) => {
  posts.slice(0, 6).forEach((post) => {
    const newCard = createCard(post.image, post.title, post.description);
    cardsContainer.appendChild(newCard);
    changeCardsView(localStorage.getItem('view'));
  });
});
