import {loadJSON, loadImage} from './index.js'
import SpriteSheet from "../SpriteSheet";

//todo separate object by name or smth

export const loadSpriteSheet = async (name) => {
  const [imageSpec, spriteSpec] = await Promise.all([
    loadImage(`./assets/sprites/${name}/${name}.png`),
    loadJSON(`./assets/sprites/${name}/${name}.json`)
  ])

  //todo separate data based on tileset/ character or something/ animations

  //todo if there are elements like tree_01, tree_02, we should create an array for each element as in:
  // trees[01, 02]

  const spriteSheet = new SpriteSheet(imageSpec);

  for (let key in spriteSpec.frames) {
    const data =  spriteSpec.frames[key].frame;
    const noExtension = key.split(".").shift();
    const noDigitsNoExtension = noExtension.split("_")[0];

    spriteSheet.define(noDigitsNoExtension, data.x, data.y, data.w, data.h);
  }

  return spriteSheet;

}