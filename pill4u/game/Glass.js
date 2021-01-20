class Glass {

  x = windowWidth / 2;
  y = windowHeight / 1.2;
  sprite;

  constructor() {
    this.sprite = createSprite(this.x, this.y);
    this.sprite.addAnimation('water', 'assets/glass.png');
    this.sprite.setCollider('rectangle', 0, -40, 125, 30);
    this.sprite.scale = 0.7;
  }

  move() {
    if (keyWentDown(LEFT)) {
      this.sprite.velocity.x -= 10;

    } else if (keyWentUp(LEFT)) {
      this.sprite.velocity.x = 0;
    }
    if (keyWentDown(RIGHT)) {
      this.sprite.velocity.x += 10;

    } else if (keyWentUp(RIGHT)) {
      this.sprite.velocity.x = 0;
    }
  }
}
