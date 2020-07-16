import { useHolyFish, useSoldierFish, useNormalFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

const domNode = document.querySelector('.col--left');

const addFishToDom = (fishCollection, sectionTitle) => {
  const fishesHTML = fishCollection.map(Fish).join('\n');

  domNode.innerHTML += `
    <section class="list list--2-col fish-list">
    <h2 class="list__header fish-list__header">${sectionTitle}</h2>
      ${fishesHTML}
    </section>
  `;
};
 
export const FishList = () => {
  const holyFish = useHolyFish();
  const soldierFish = useSoldierFish();
  const normalFish = useNormalFish();

  addFishToDom(holyFish, 'Holy Fish');
  addFishToDom(soldierFish, 'Soldier Fish');
  addFishToDom(normalFish, 'The Unworthy');
};