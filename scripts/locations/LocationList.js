import { useLocation } from './LocationDataProvider.js';
import { Location } from './Location.js';

export const LocationList = () => {
  const domNode = document.querySelector('.col--left');

  const locations = useLocation();

  const locationsHTML = locations.map(Location).join('\n');

  domNode.innerHTML += `
    <section class="list list--2-col location-list">
      <h2 class="list__header location-list__header">Places I've Harvested</h2>
      ${locationsHTML}
    </section>
  `;
};