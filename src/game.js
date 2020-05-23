import Screen from "./screen"
import {loadTiledMap} from "./tiled/tiled-loader"
import Keyboard from "./input/keyboard/Keyboard"
import Renderer from "./Renderer";
import Layer from "./Layer";
import Vec2 from "./math/Vec2";
import Camera from "./camera/Camera";
import {KEY_A, KEY_D, KEY_S, KEY_W} from "./input/keyboard/constants";


export default class Game {
  constructor(width, height, fps) {
    this.screen = new Screen(width, height)
    this.fps = 60
    this.currentFrameNum = 0
    this.lastUpdated = Date.now()
    this.map = null
    this.renderer = new Renderer()
    this.camera = new Camera();
    this.keyboard = new Keyboard();
    this.keyboard.listenTo(window);
  }

  async init() {

    this.screen.init()

    this.keyboard.addMapping(KEY_W, keyState => {
      if (keyState === 1) {
        this.camera.pos.y -= 3
      }
    })

    this.keyboard.addMapping(KEY_A, keyState => {
      if (keyState === 1) {
        this.camera.pos.x -= 3
      }
    })

    this.keyboard.addMapping(KEY_S, keyState => {
      if (keyState === 1) {
        this.camera.pos.y += 3
      }
    })

    this.keyboard.addMapping(KEY_D, keyState => {
      if (keyState === 1) {
        this.camera.pos.x += 3
      }
    })

    // this.worldMapAssets = await loadSpriteSheet("worldmap")
    const map = await loadTiledMap("map_01")
    const mapLayerId = Symbol("layerId")
    const mapPos = new Vec2(0, 0);
    const mapLayer = new Layer(mapLayerId,
      (context, camera) => map.draw(context, camera, mapPos)
    );

    this.renderer.addLayer(mapLayer);
  }

  draw() {
    console.log("DRAWING");
    this.screen.clear()
    this.renderer.draw(this.screen.context, this.camera)
  }
  update() {
    const now = Date.now()
    let deltaTime = (now - this.lastUpdated) / 1000

    if (deltaTime > 1/this.fps) {
      this.lastUpdated = Date.now()
      this.draw(deltaTime)
      this.currentFrameNum++
    }

    requestAnimationFrame(this.update.bind(this))
  }
}
