const fishCollection = [
  {
    name: 'Sharky Guy',
    species: 'Great White Shark',
    length: 240,
    location: 'Pacific Ocean',
    diet: ['Flesh'],
    image: './assets/fish/greatWhiteShark.jpeg'
  },
  {
    name: 'Martin (No Relation)',
    species: 'Marlin',
    length: 192,
    location: 'Caribbean Sea',
    diet: ['Plankton'],
    image: './assets/fish/marlin.jpeg'
  },
  {
    name: 'Sharky Guy',
    species: 'Great White Shark',
    length: 10,
    location: 'Pacific Ocean',
    diet: ['Flesh'],
    image: './assets/fish/greatWhiteShark.jpeg'
  },
  {
    name: 'Martin (No Relation)',
    species: 'Marlin',
    length: 15,
    location: 'Caribbean Sea',
    diet: ['Plankton'],
    image: './assets/fish/marlin.jpeg'
  },
  {
    name: 'Martin (No Relation)',
    species: 'Marlin',
    length: 25,
    location: 'Caribbean Sea',
    diet: ['Plankton'],
    image: './assets/fish/marlin.jpeg'
  },
  {
    name: 'Katana',
    species: 'Swordfish',
    length: 7,
    location: 'Indian Ocean',
    diet: ['Shrimp'],
    image: './assets/fish/swordfish.jpeg'
  },
  {
    name: 'Katana',
    species: 'Swordfish',
    length: 120,
    location: 'Indian Ocean',
    diet: ['Shrimp'],
    image: './assets/fish/swordfish.jpeg'
  },
  {
    name: 'Katana',
    species: 'Swordfish',
    length: 2,
    location: 'Indian Ocean',
    diet: ['Shrimp'],
    image: './assets/fish/swordfish.jpeg'
  },
  {
    name: 'BigBoi',
    species: 'Blue Whale',
    length: 1176,
    location: 'Percy Priest Lake',
    diet: ['Krill', 'Plankton'],
    image: './assets/fish/blueWhale.jpeg'
  }
];

/**
 * Return an array of all fish
 */
export const useFish = () => JSON.parse(JSON.stringify(fishCollection));

/**
 * Return an array of "holy fish" (those whose lengths are evenly divisible by 3)
 */
export const useHolyFish = () => {
  const holyFish = fishCollection.filter(fish => fish.length % 3 === 0);

  return JSON.parse(JSON.stringify(holyFish));
};

/**
 * Return an array of "soldier fish" (those whose lengths are evenly divisible by 5, and not by 3)
 */
export const useSoldierFish = () => {
  const soldierFish = fishCollection.filter(fish => fish.length % 5 === 0 && fish.length % 3 !== 0);

  return JSON.parse(JSON.stringify(soldierFish));
};

/**
 * Return an array of "normal fish" (those whose length are evenly divisible by neither 5 nor 3)
 */
export const useNormalFish = () => {
  const normalFish = fishCollection.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0);

  return JSON.parse(JSON.stringify(normalFish));
}