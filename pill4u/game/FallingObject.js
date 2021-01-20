class FallingObject {

  randomPill = floor(random(0, 6));
  sprite;
  x = random(0, windowWidth);
  y = 0;

  constructor() {
    if (this.randomPill == 0) {
      this.sprite = createSprite(this.x, this.y);
      this.sprite.addAnimation('bluepill', 'assets/blue_pill.png');
      this.sprite.setCollider('rectangle', 0, 0, 45, 83);
      this.sprite.scale = 0.7;
      this.sprite.setSpeed(floor(random(2, 9)), 90);
    } else if (this.randomPill == 1) {
      this.sprite = createSprite(this.x, this.y);
      this.sprite.addAnimation('greenpill', 'assets/green_pill.png');
      this.sprite.setCollider('rectangle', 0, 0, 45, 83);
      this.sprite.scale = 0.7;
      this.sprite.setSpeed(floor(random(2, 9)), 90);
    } else if (this.randomPill == 2) {
      this.sprite = createSprite(this.x, this.y);
      this.sprite.addAnimation('yellowpill', 'assets/yellow_pill.png');
      this.sprite.setCollider('rectangle', 0, 0, 45, 83);
      this.sprite.scale = 0.7;
      this.sprite.setSpeed(floor(random(2, 9)), 90);
    } else if (this.randomPill == 3) {
      this.sprite = createSprite(this.x, this.y);
      this.sprite.addAnimation('bluemed', 'assets/blue_med.png');
      this.sprite.setCollider('rectangle', 0, 0, 45, 83);
      this.sprite.scale = 0.9;
      this.sprite.setSpeed(floor(random(2, 9)), 90);
    } else if (this.randomPill == 4) {
      this.sprite = createSprite(this.x, this.y);
      this.sprite.addAnimation('yellowmed', 'assets/yellow_med.png');
      this.sprite.setCollider('rectangle', 0, 0, 45, 83);
      this.sprite.scale = 0.9;
      this.sprite.setSpeed(floor(random(2, 9)), 90);
    } else if (this.randomPill == 5) {
      this.sprite = createSprite(this.x, this.y);
      this.sprite.addAnimation('redmed', 'assets/red_med.png');
      this.sprite.setCollider('rectangle', 0, 0, 45, 83);
      this.sprite.scale = 0.9;
      this.sprite.setSpeed(floor(random(2, 9)), 90);
    }
  }

  killCondition() {
    if (this.sprite.position.y > windowHeight + 100) {
      this.sprite.remove();
      return true;
    }
    return false;
  }

  catchCondition() {
    if (glassOfWater.sprite.overlap(this.sprite)) {
      this.sprite.remove();
      return true;
    }
    return false
  }
}
