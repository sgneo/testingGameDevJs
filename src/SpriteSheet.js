export default class SpriteSheet {
  constructor(image) {
    this.image = image;


    //todo make them tiles somehow
    this.tiles = new Map()
  }

  /**
   *
   * @param name - name of the element, (tree_01/grass_02/rock_01)
   * @param x - position on x axis inside sprite sheet
   * @param y - position on y axis inside sprite sheet
   * @param width
   * @param height
   *
   * This method will create 2 buffer:
   *  - normal as in sprite
   *  - horizontally flipped
   */
  define(name, x, y, width, height) {
    const buffers = [false, true].map(flip => {
      const buffer = document.createElement('canvas')
      buffer.width = width
      buffer.height = height

      const context = buffer.getContext('2d')

      if (flip) {
        context.scale(-1, 1)
        context.translate(-width, 0)
      }

      console.log(width, height)

      context.drawImage(
        this.image,
        x,
        y,
        width,
        height,
        0,
        0,
        width,
        height);

      return buffer;
    })

    if (this.tiles.get(name)) {
      this.tiles.get(name).push(buffers);
    } else {
      this.tiles.set(name, []);
      this.tiles.get(name).push(buffers);
    }
  }

  getNumSameType(name) {
    return this.tiles.get(name).length;
  }

  draw(name, context, x, y, index = 0, flip = false) {
    const buffer = this.tiles.get(name)[index][flip ? 1 : 0];
    context.drawImage(buffer, x, y);
  }
}