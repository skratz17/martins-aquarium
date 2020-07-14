const tipCollection = [
  {
    content: 'Condition the water, maintain proper pH levels, and stabilize the temperature.'
  },
  {
    content: 'Plan to replace 25% of the water in your aquarium once a month.'
  },
  {
    content: 'Take a few moments to observe your aquatic life on a regular basis. Watch for changes in appearance, behavior or appetite so that you’ll immediately notice if something is amiss.'
  },
  {
    content: 'The size of the aquarium that you need will depend on the type of fish you decide to bring home (consider if it will be a freshwater fish, saltwater fish and the individual species), and how many you will want to get.'
  },
];

export const useTip = () => JSON.parse(JSON.stringify(tipCollection));