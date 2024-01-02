const dateFormatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export function createCard(imageLink, title, description) {
  const newCard = document.createElement('article');
  newCard.classList.add('card');
  newCard.innerHTML = `
    <img src="${imageLink}" class="card__image" alt="Image description" />
    <div class="card__content">
      <h3 class="card__title">${title}</h3>
      <p class="card__text">${description}</p>
      <p class="card__info">${dateFormatter.format(new Date())} · ${Math.floor(Math.random() * 10) + 1} min read</p>
    </div>
  `;
  return newCard;
}
