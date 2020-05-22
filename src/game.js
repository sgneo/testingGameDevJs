import Screen from "./screen"


export default class Game {
  constructor(width, height) {
    this.screen = new Screen(width, height)
  }

  init() {
    this.screen.init()
  }

  draw() {
    console.log("DRAWING")
  }
  update() {
    this.draw()
    requestAnimationFrame(this.update.bind(this))
  }
}
