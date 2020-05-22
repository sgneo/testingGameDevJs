import SpriteSheet from "./SpriteSheet";
const TILE_WIDTH = 32;
const TILE_HEIGHT = 32;

export default class Map {
  constructor(data, width, height) {
    this.data = data;
    this.width = width;
    this.height = height;
  }

  //todo works but make everything in define a bit more programatic with classes or something
  define(spriteSheet) {
    console.log("SpriteSheet", spriteSheet);
    this.buffer = document.createElement('canvas');
    const context = this.buffer.getContext('2d')


    let column = 0;
    for (let i = 0; i < this.data.length; i++) {
      let row = i % 30;
      if (i > 0 && i % 30 === 0) {
        column++;
      }

      const tileIndex = this.data[i] - 1;


      const bufferToDraw = spriteSheet.tiles.get(tileIndex)[0];

      console.log("ASD", spriteSheet);


      spriteSheet.draw(tileIndex,
        context,
        row * TILE_WIDTH,
        column * TILE_HEIGHT);

    }
  }

  draw(context, x, y) {
    context.drawImage(this.buffer, x, y);
  }

  // define(name, x, y, width, height) {
  //   const buffers = [false, true].map(flip => {
  //     const buffer = document.createElement('canvas')
  //     buffer.width = width
  //     buffer.height = height
  //
  //     const context = buffer.getContext('2d')
  //
  //     if (flip) {
  //       context.scale(-1, 1)
  //       context.translate(-width, 0)
  //     }
  //
  //     context.drawImage(
  //       this.image,
  //       x,
  //       y,
  //       width,
  //       height,
  //       0,
  //       0,
  //       width,
  //       height);
  //
  //     return buffer;
  //   })
  //
  //   this.tiles.set(name, buffers);
  // }
}