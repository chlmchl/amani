class Sperm extends FallingObject {
  constructor() {
    super()
    this.sprite.addAnimation('crawling', 'assets/sperm1.png', 'assets/sperm3.png');
    this.sprite.setCollider('rectangle', 0, 0, 72, 72);
    this.sprite.setSpeed(3, 90);
    this.sprite.scale = 0.8;

    this.sprite.position.x = random(0, windowWidth);
    this.sprite.position.y = -100;
  }

  catchCondition() {
    return false;
  }
}
