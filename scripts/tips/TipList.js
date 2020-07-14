import { useTip } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const TipList = () => {
  const domNode = document.querySelector('.col--right');

  const tips = useTip();

  const tipsHTML = tips.map(Tip).join('\n');

  domNode.innerHTML += `
    <aside class="list list--1-col tip-list">
      <h2 class="list__header tip-list__header">Tips</h2>
      <ul class="tip-list__text-list">
        ${tipsHTML}
      </ul>
    </aside>
  `;
};