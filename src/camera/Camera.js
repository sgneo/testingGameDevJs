import Vec2 from '../math/Vec2';

export default class Camera {
  constructor() {
    this.pos = new Vec2(0, 0);
    this.size = new Vec2(256, 224);
  }
}
