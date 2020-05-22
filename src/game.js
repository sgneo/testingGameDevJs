import Screen from "./screen"
import {loadSpriteSheet} from "./loaders/sprite"


export default class Game {
  constructor(width, height, fps) {
    this.screen = new Screen(width, height)
    this.fps = 60;
    this.currentFrameNum = 0;
    this.lastUpdated = Date.now();
    this.worldMap = null;
  }

  async init() {
    this.screen.init()
    this.worldMap = await loadSpriteSheet("worldmap");

  }

  draw() {
    this.worldMap.draw("tree", this.screen.context, 0, 0)
  }
  update() {
    const now = Date.now();
    let deltaTime = (now - this.lastUpdated) / 1000;

    if (deltaTime > 1/this.fps) {
      this.lastUpdated = Date.now();
      this.draw(deltaTime)
      this.currentFrameNum++;
    }

    requestAnimationFrame(this.update.bind(this))
  }
}
