export function changeCardsView(view) {
  const listButton = document.querySelector('.interesting-articles__button-list');
  const gridButton = document.querySelector('.interesting-articles__button-grid');
  const cards = document.querySelector('.interesting-articles__cards');
  const cardList = document.querySelectorAll('.card');
  const cardImageList = document.querySelectorAll('.card__image');

  const isListView = view === 'list';

  localStorage.setItem('view', view);

  cards.classList.toggle('interesting-articles__cards--list', isListView);
  cards.classList.toggle('interesting-articles__cards--grid', !isListView);

  listButton.classList.toggle('interesting-articles__button--selected', isListView);
  gridButton.classList.toggle('interesting-articles__button--selected', !isListView);

  if (isListView) {
    cardList.forEach((card) => card.classList.add('card--list'));
    cardImageList.forEach((img) => img.classList.add('card__image--list'));
  } else {
    cardList.forEach((card) => card.classList.remove('card--list'));
    cardImageList.forEach((img) => img.classList.remove('card__image--list'));
  }
}

const listButton = document.querySelector('.interesting-articles__button-list');
const gridButton = document.querySelector('.interesting-articles__button-grid');
listButton.addEventListener('click', () => changeCardsView('list'));
gridButton.addEventListener('click', () => changeCardsView('grid'));
