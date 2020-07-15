import escape from '../escapeHTML.js';

export const Fish = fish => {
  const { name, species, length, location, diet, image } = fish;

  return `
    <article class="card list-item fish">
      <div class="card--left">
        <img class="card__image fish__image" src="${encodeURI(image)}">
      </div>
      <div class="card--right">
        <h3 class="card__header fish__name">${escape(name)}</h3>
        <div class="card__content">
          <p class="fish__species"><span class="fish__label card__label">Species:</span> ${escape(species)}</p>
          <p class="fish__length"><span class="fish__label card__label">Length:</span> ${escape(length)} inches</p>
          <p class="fish__location"><span class="fish__label card__label">Location:</span> ${escape(location)}</p>
          <p class="fish__diet"><span class="fish__label card__label">Diet:</span> ${diet.map(escape).join(', ').replace(/,\s*$/, "")}</p>
        </div>
      </div>
    </article>
  `;
};