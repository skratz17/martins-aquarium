import escape from '../escapeHTML.js';

export const Location = location => {
  const { name, description, href, image } = location;

  return `
    <article class="card list-item location">
      <div class="card--left">
        <img src="${encodeURI(image)}"class="card__image location__image">
      </div>
      <div class="card--right">
        <h3 class="card__header location__name"><a href="${encodeURI(href)}" target="__blank">${escape(name)}</a></h3>
        <div class="card__content">
          <p class="location__description">${escape(description)}</p>
        </div>
      </div>
    </article>
  `;
};