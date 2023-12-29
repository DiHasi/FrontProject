export function changeCardsView(view) {
  const listButton = document.querySelector('.interesting-articles__button-list');
  const gridButton = document.querySelector('.interesting-articles__button-grid');
  const cards = document.querySelector('.interesting-articles__cards');
  const cardList = document.querySelectorAll('.card');

  const isListView = view === 'list';

  localStorage.setItem('view', view);

  cards.classList.toggle('interesting-articles__cards--list', isListView);
  cards.classList.toggle('interesting-articles__cards--grid', !isListView);

  listButton.classList.toggle('interesting-articles__button--selected', isListView);
  gridButton.classList.toggle('interesting-articles__button--selected', !isListView);

  cardList.forEach((card) => {
    card.classList.toggle('card--list', isListView);
  });
}

const listButton = document.querySelector('.interesting-articles__button-list');
const gridButton = document.querySelector('.interesting-articles__button-grid');
listButton.addEventListener('click', () => changeCardsView('list'));
gridButton.addEventListener('click', () => changeCardsView('grid'));
