export default class Renderer {
  constructor() {
    this.layers = [];
  }

  draw(context, camera) {
    this.layers.forEach(layer => {
      layer.drawFn(context, camera);
    })
  }

  addLayer(layer) {
    this.layers.push(layer);
  }

  removeLayer(layer, id) {
    this.layers = this.layers.filter(layer => layer.id !== id);
  }
}
