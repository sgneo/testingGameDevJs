import SpriteSheet from "../SpriteSheet"

export default class TiledMap {
  constructor(layers, tileSets, tileWidth, tileHeight, widthInTiles, heightInTiles) {
    this.layers = layers
    this.tileSets = tileSets
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
    this.widthInTiles = widthInTiles
    this.heightInTiles = heightInTiles

    this.layouts = []
  }

  getTotalWidth() {
    return this.tileWidth * this.widthInTiles
  }

  getTotalHeight() {
    return this.tileHeight * this.heightInTiles
  }

  define() {
    const layout = []


    this.tileSets.forEach(tileSet => {
      const {spriteSheet, tileWidth, tileHeight} = tileSet

      this.layers.forEach(layer => {
        const { grid } = layer
        const buffer = document.createElement('canvas')
        const context = buffer.getContext('2d')

        buffer.width = this.getTotalWidth()
        buffer.height = this.getTotalHeight()

        grid.forEach((tileIndex, x, y) => {

          if (tileIndex !== 0) {

            spriteSheet.draw(
              tileIndex,
              context,
              y * tileWidth,
              x * tileHeight)
          }
        })

        layout.push(buffer)
      })
    })

    this.layouts.push(layout)
  }

  draw(context, x = 0, y = 0, index = 0) {
    const buffers = this.layouts[index]

    buffers.forEach(buffer => {
      context.drawImage(buffer, x, y)
    })
  }
}