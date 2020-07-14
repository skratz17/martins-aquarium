import { useFish } from './FishDataProvider.js';

const allFish = useFish();

for(const fish of allFish) {
  console.log(fish);
}