export default class Layer {
  constructor(id, drawFn) {
    this.id = id;
    this.drawFn = drawFn;
  }
}