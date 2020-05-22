import Screen from "./screen"
import {loadSpriteSheet} from "./loaders/sprite"
import {loadMap} from "./loaders/map"


export default class Game {
  constructor(width, height, fps) {
    this.screen = new Screen(width, height)
    this.fps = 60;
    this.currentFrameNum = 0;
    this.lastUpdated = Date.now();
    this.worldMapAssets = null;
    this.map = null
  }

  async init() {
    this.screen.init()
    this.worldMapAssets = await loadSpriteSheet("worldmap");
    this.map = await loadMap("map_01");

    this.map.define(this.worldMapAssets);
    // this.worldMapAssets.draw(5, this.screen.context)
    // console.log("ASSETS", this.worldMapAssets);
    this.map.draw(this.screen.context, 0, 0);

  }

  draw() {
    // this.worldMap.draw("tree", this.screen.context, 0, 0);
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
