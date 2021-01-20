class Ibonus extends FallingObject {
  constructor() {
    super()
    this.sprite.addAnimation('pill', 'assets/i_bonus.png');
    this.sprite.setCollider('rectangle', 0, 0, 60, 59);
    this.sprite.setSpeed(4, 90);
    this.sprite.scale = 0.8;
    this.sprite.position.x = random(0, windowWidth);
    this.sprite.position.y = -100;
  }

  shootCondition() {
    return false;
  }

  condomKill() {
    return false;
  }
}
