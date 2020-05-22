export default class Screen {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  init() {
    this.canvas = document.createElement("canvas")
    this.canvas.style.width = this.width + "px"
    this.canvas.style.height = this.height + "px"
    this.context = this.canvas.getContext("2d")

    const body = document.getElementsByTagName("body")[0]
    body.appendChild(this.canvas)
  }
}