const quoteCollection = [
  {
    attribution: 'Mark Twain',
    content: 'When you fish for love, bait with your heart, not your brain.',
    src: 'https://www.brainyquote.com/quotes/mark_twain_382997',
    image: './assets/quotes/markTwain.jpeg'
  },
  {
    attribution: 'Maimonides',
    content: 'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.',
    src: 'https://www.brainyquote.com/quotes/maimonides_326751',
    image: './assets/quotes/maimonides.jpeg'
  },
  {
    attribution: 'Lao Tzu',
    content: 'Govern a great nation as you would cook a small fish. Do not overdo it.',
    src: 'https://www.brainyquote.com/quotes/lao_tzu_130856',
    image: './assets/quotes/laoTzu.jpeg'
  }
];

export const useQuote = () => JSON.parse(JSON.stringify(quoteCollection));