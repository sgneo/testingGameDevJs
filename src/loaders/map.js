import {loadJSON, loadImage} from './index.js'
import Map from "../Map";

//todo separate object by name or smth

export const loadMap = async (name) => {

  const mapSpec = await loadJSON(`./assets/maps/${name}.json`)


  const {width, height, data} = mapSpec.layers[0]

  const map = new Map(data, width, height);

  return map;
}