import {loadJSON, loadImage} from './index.js';

export const loadSpriteSheet = async (name) => {
  try {
    const rawData = await loadJSON(`./assets/sprites/${name}/${name}.json`);

    console.log("RAW DATA LOADED SUCCESSFULY", rawData);
  } catch (e) {
    throw new Error(`Error loading SpriteSheet for ${name}`);
  }
}