import Screen from "./screen"


export default class Game {
  constructor(width, height, fps) {
    this.screen = new Screen(width, height)
    this.fps = 60;
    this.currentFrameNum = 0;
    this.lastUpdated = Date.now();
  }

  init() {
    this.screen.init()
  }

  draw(deltaTime) {

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
