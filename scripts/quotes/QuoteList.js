import { useQuote } from './QuoteDataProvider.js';
import { Quote } from './Quote.js';

export const QuoteList = () => {
  const domNode = document.querySelector('.col--left');

  const quotes = useQuote();

  const quotesHTML = quotes.map(Quote).join('\n');

  domNode.innerHTML += `
    <section class="list list--2-col quote-list">
      <h2 class="list__header quote-list__header">Quotes About Fish</h2>
      ${quotesHTML}
    </section>
  `;
};