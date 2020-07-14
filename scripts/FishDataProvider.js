const fishCollection = [];

const addFish = (name, species, length, location, ...diet) => {
  fishCollection.push({ name, species, length, location, diet });
}

addFish('Sharky Guy', 'Great White Shark', 240, 'Pacific Ocean', 'Flesh');
addFish('Martin (No Relation)', 'Marlin', 184, 'Caribbean Sea', 'Plankton');
addFish('Katana', 'Swordfish', 120, 'Indian Ocean', 'Shrimp', 'Krill');
addFish('BigBoi', 'Blue Whale', 1176, 'Percy Priest Lake', 'Krill', 'Plankton');

export default fishCollection;