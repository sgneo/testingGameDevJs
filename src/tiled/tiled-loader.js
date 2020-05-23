import {loadJSON, loadImage} from '../loaders/index.js'
// import Map from "../Map"
import TiledMap from "./TiledMap"
import Vec2 from "../math/Vec2"
import Matrix from '../math/Matrix'
import {loadSpriteSheet} from "../loaders/sprite"


//todo separate object by name or smth


const parseTiledMapLayer = (layer) => {
  const formattedData = {}


  formattedData.id = layer.id
  formattedData.name = layer.name
  formattedData.widthInTiles = layer.width
  formattedData.heightInTiles = layer.height
  formattedData.opacity = layer.opacity
  formattedData.pos = new Vec2(layer.x, layer.y)
  formattedData.grid = Matrix.RSOtoMatrix(layer.data, formattedData.widthInTiles)

  return formattedData
}

const parseTileSet = (tileSet, spriteSheet) => {
  const formattedData = {}

  formattedData.tileCount = tileSet.tilecount
  formattedData.tileHeight = tileSet.tileheight
  formattedData.tileWidth = tileSet.tilewidth
  formattedData.tileCount = tileSet.tilecount
  formattedData.spriteSheet = spriteSheet


  return formattedData
}

const parseTiledMap = async (mapSpec) => {
  const formattedData = {}
  formattedData.tileWidth = mapSpec.tilewidth
  formattedData.tileHeight = mapSpec.tileheight
  formattedData.heightInTiles = mapSpec.height
  formattedData.widthInTiles = mapSpec.width
  formattedData.layers = mapSpec.layers.map(layer => parseTiledMapLayer(layer))

  let promisses = []

  for (let tileSetSpec of mapSpec.tilesets) {
    const name = tileSetSpec.image.split("/").pop().split(".").shift()
    promisses.push(
      loadSpriteSheet(name)
    )
  }

  await Promise.all(promisses).then(([...spriteSheets]) => {
    formattedData.tileSets = mapSpec.tilesets.map((tileSet, index) => parseTileSet(tileSet, spriteSheets[index]))
  })

  return formattedData

}

export const loadTiledMap = async (name) => {

  const mapSpec = await loadJSON(`./assets/maps/${name}.json`)

  const formattedData = await parseTiledMap(mapSpec)

  const tiledMap = new TiledMap(
    formattedData.layers,
    formattedData.tileSets,
    formattedData.tileWidth,
    formattedData.tileHeight,
    formattedData.widthInTiles,
    formattedData.heightInTiles
  )

  tiledMap.define()

  return tiledMap
}