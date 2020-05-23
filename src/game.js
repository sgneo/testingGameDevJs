import Screen from "./screen"
import {loadTiledMap} from "./tiled/tiled-loader"
import {loadSpriteSheet} from "./loaders/sprite"


export default class Game {
  constructor(width, height, fps) {
    this.screen = new Screen(width, height)
    this.fps = 60
    this.currentFrameNum = 0
    this.lastUpdated = Date.now()
    this.worldMapAssets = null
    this.map = null
  }

  async init() {

    this.screen.init()

    this.worldMapAssets = await loadSpriteSheet("worldmap")
    this.map = await loadTiledMap("map_01")
  }

  draw() {
    this.screen.clear()
    this.map.draw(this.screen.context, 0, 0)
    console.log("DRAWING");
  }
  update() {
    const now = Date.now()
    let deltaTime = (now - this.lastUpdated) / 1000

    if (deltaTime > 1/this.fps) {
      this.lastUpdated = Date.now()
      this.draw(deltaTime)
      this.currentFrameNum++
    }

    requestAnimationFrame(this.update.bind(this))
  }
}
