import escape from '../escapeHTML.js';

export const Quote = quote => {
  const { attribution, content, src, image } = quote;

  return `
    <article class="card card--reversed list-item quote">
      <div class="card--left">
        <h3 class="card__header quote__attribution">${escape(attribution)}</h3>
        <div class="card__content">
          <blockquote class="quote__text" src="${encodeURI(src)}">${escape(content)}</blockquote>
        </div>
      </div>
      <div class="card--right">
        <img src="${encodeURI(image)}" class="card__image quote__image">
      </div>
    </article>
  `;
};