import Vec2 from "../math/Vec2";
import Entity from "./Entity";


export default class Tree extends Entity {
  constructor(name) {
    super(name);
    this.buffer = null;
  }

  draw(context, camera) {
    context.drawImage(this.buffer,
      this.pos.x - camera.pos.x,
      this.pos.y - camera.pos.y
    )
  }
}
