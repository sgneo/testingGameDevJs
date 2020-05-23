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

    var dpr = window.devicePixelRatio;
    this.canvas.width = 400
    this.canvas.height = 300
    this.canvas.style.transform = "scale(2, 2)";
    this.context = this.canvas.getContext("2d")

    body.appendChild(this.canvas)
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  }
}