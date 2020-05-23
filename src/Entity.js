import Vec2 from "./math/Vec2";


export default class Entity {
  constructor(name) {
    this.name = name

    this.pos = new Vec2(0, 0)
    this.size = new Vec2(0 , 0)
    this.lifetime = 0

    this.boundingBox = 0 //todo impl bounding box class

    this.traits = new Map() // todo impl components like life/killable/move etc
  }

  addTrait(trait) {
    this.traits.set(trait.constructor, trait)
  }

  getTrait(trait) {
    return this.traits.get(trait.constructor)
  }

  update() {

  }

  draw() {

  }
}
