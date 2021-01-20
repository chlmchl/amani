class Virus extends FallingObject {

  constructor() {
    super()
    this.sprite.addAnimation('crawling', 'assets/virus.png');
    this.sprite.setCollider('rectangle', 0, 0, 96, 96);
    this.sprite.setSpeed(1, 90);
    this.sprite.scale = 0.8;
    
    this.sprite.position.x = random(0, windowWidth);
    this.sprite.position.y = -100;
  }

  virusRotate() {
    this.sprite.rotation -= 3;
  }

  virusZigZag() {
    this.x += 0.05;
    this.sprite.position.x = this.sprite.position.x + (sin(this.x) * 2);
  }

  shootCondition() {
    return false;
  }

  catchCondition() {
    return false;
  }

}
