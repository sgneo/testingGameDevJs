import Entity from "../entities/Entity";
import Tree from "../entities/Tree";
const GROUND = "ground"
const TERRAIN_OBJECTS = "terrain_objects"


export default class TiledMap {
  constructor(layers, tileSets, tileWidth, tileHeight, widthInTiles, heightInTiles) {
    this.layers = layers
    this.tileSets = tileSets
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
    this.widthInTiles = widthInTiles
    this.heightInTiles = heightInTiles

    this.layouts = []
    this.entities = []
  }

  getTotalWidth() {
    return this.tileWidth * this.widthInTiles
  }

  getTotalHeight() {
    return this.tileHeight * this.heightInTiles
  }


  defineGround(layer, tileSet) {
    const { name, grid } = layer
    const {spriteSheet, tileWidth, tileHeight} = tileSet

    const buffer = document.createElement('canvas')
    const context = buffer.getContext('2d')

    buffer.width = this.getTotalWidth()
    buffer.height = this.getTotalHeight()

    grid.forEach((tileIndex, x, y) => {

      if (tileIndex !== 0) {

        spriteSheet.drawById(
          tileIndex,
          context,
          y * tileWidth,
          x * tileHeight)
      }
    })

    this.layouts.push(buffer)
  }

  defineEntities(layer, tileSet) {
    const { name, grid } = layer
    const {spriteSheet, tileWidth, tileHeight} = tileSet

    grid.forEach((tileIndex, x, y) => {
      if (tileIndex !== 0) {
        const entityName = spriteSheet.tilesCache.get(tileIndex)
        // const entity = new Entity(entityName);
        //todo make this calable
        const entity = new Tree(entityName);
        entity.buffer =spriteSheet.tilesById.get(tileIndex)[0];
        entity.pos.x = y * tileWidth;
        entity.pos.y = x * tileHeight;

        this.entities.push(entity);
      }
    })


    console.log("ENTITIES", this.entities);


  }

  define() {
    const layout = []

    const tileSet = this.tileSets[0];

    const {spriteSheet, tileWidth, tileHeight} = tileSet

    for (const layer of this.layers) {
      const { name, grid } = layer

      if (name === GROUND) {
        this.defineGround(layer, tileSet);
      } else {
        //entities
        this.defineEntities(layer, tileSet);
      }
      //
      // const buffer = document.createElement('canvas')
      // const context = buffer.getContext('2d')
      //
      // buffer.width = this.getTotalWidth()
      // buffer.height = this.getTotalHeight()
      //
      // grid.forEach((tileIndex, x, y) => {
      //
      //   if (tileIndex !== 0) {
      //
      //     spriteSheet.draw(
      //       tileIndex,
      //       context,
      //       y * tileWidth,
      //       x * tileHeight)
      //   }
      // })
      //
      // layout.push(buffer)
    }


    this.layouts.push(layout)
  }

  drawGround(context, camera, pos, index = 0) {
    const buffer = this.layouts[index]

    context.drawImage(buffer,
      pos.x - camera.pos.x,
      pos.y - camera.pos.y
    )
  }

  drawEntities(context, camera) {
    for (const entity of this.entities) {
      entity.draw(context, camera)
    }
  }
}