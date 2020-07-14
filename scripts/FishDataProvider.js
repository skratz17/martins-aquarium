const fishCollection = [];

const addFish = (name, species, length, location, image, ...diet) => {
  fishCollection.push({ name, species, length, location, image, diet });
}

addFish('Sharky Guy', 'Great White Shark', 240, 'Pacific Ocean', './assets/fish/greatWhiteShark.jpeg', 'Flesh');
addFish('Martin (No Relation)', 'Marlin', 184, 'Caribbean Sea', './assets/fish/marlin.jpeg', 'Plankton');
addFish('Katana', 'Swordfish', 120, 'Indian Ocean', 'Shrimp', './assets/fish/swordfish.jpeg', 'Krill');
addFish('BigBoi', 'Blue Whale', 1176, 'Percy Priest Lake', 'Krill', './assets/fish/blueWhale.jpeg', 'Plankton');

export default fishCollection;