export default class Screen {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.canvas = null
    this.context = null
  }

  init() {
    const body = document.getElementsByTagName("body")[0]
    this.canvas = document.createElement("canvas")
    this.canvas.width = 800
    this.canvas.height = 600
    this.context = this.canvas.getContext("2d")

    body.appendChild(this.canvas)
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  }
}