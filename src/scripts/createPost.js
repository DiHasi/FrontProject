import { changeCardsView } from './cardsView.js';
import { createCard } from './createCard.js';

const toggleVisibility = (element1, element2) => {
  element1.classList.toggle('hidden');
  element2.classList.toggle('hidden');
};

const addButton = document.querySelector('.button--add');
const cancelButton = document.querySelector('.button--cancel');
const form = document.querySelector('.form__create-card');

addButton.addEventListener('click', () => toggleVisibility(addButton, form));
cancelButton.addEventListener('click', () => toggleVisibility(addButton, form));

const createButton = document.querySelector('.button--create');
const cards = document.querySelector('.interesting-articles__cards');

createButton.addEventListener('click', () => {
  const title = document.querySelector('#articleTitle').value;
  const imageLink = document.querySelector('#imageLink').value;
  const description = document.querySelector('#description').value;

  if (!title || !imageLink || !description) return;

  const newCard = createCard(imageLink, title, description);

  cards.appendChild(newCard);

  changeCardsView(localStorage.getItem('view'));

  document.querySelector('.form__create-card').reset();

  toggleVisibility(addButton, form);
});
