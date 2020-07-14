import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {
  const domNode = document.querySelector('.col--left');

  const fishes = useFish();

  const fishesHTML = fishes.map(Fish).join('\n');

  domNode.innerHTML += `
    <section class="list list--2-col fish-list">
    <h2 class="list__header fish-list__header">My Fish</h2>
      ${fishesHTML}
    </section>
  `;
};