const locationCollection = [
  {
    name: 'Caribbean Sea',
    description: 'The Caribbean Sea is one of the biggest and most beautiful and wonderful seas I ever did see. Wow there are fish there. Wow there is water there. What a magical utopia of water.',
    href: 'https://en.wikipedia.org/wiki/Caribbean_Sea',
    image: './assets/locations/caribbeanSea.jpeg'
  },
  {
    name: 'Indian Ocean',
    description: 'The Indian Ocean. Wow, what a concept. There is so much water and if I may say so myself so many fish. I caught a fish here. I hope you will too!',
    href: 'https://en.wikipedia.org/wiki/Indian_Ocean',
    image: './assets/locations/indianOcean.jpeg'
  }
];

export const useLocation = () => JSON.parse(JSON.stringify(locationCollection));