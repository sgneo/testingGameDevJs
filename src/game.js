import Screen from "./screen"
import { loadSpriteSheet } from "./loaders/sprite";
import {loadAtlas} from "./loaders/atlas";


export default class Game {
  constructor(width, height) {
    this.screen = new Screen(width, height);
  }

  init() {
    this.screen.init();

    //test
  }

  draw() {
    console.log("DRAWING");
  }
  update() {
    this.draw();
    requestAnimationFrame(this.update.bind(this));
  }
}
