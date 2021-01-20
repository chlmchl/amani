class Spaceship {
  shipSprite;
  x = windowWidth / 2;
  y = windowHeight / 1.2;

  constructor() {
    this.shipSprite = createSprite(this.x, this.y);
    this.shipSprite.addAnimation('spaceship', 'assets/spaceship1.png', 'assets/spaceship3.png');
    this.shipSprite.addAnimation('shield', 'assets/protected_spaceship1.png', 'assets/protected_spaceship3.png');
    this.shipSprite.setCollider('rectangle', 0, 0, 96, 96);
  }



  move() {
    if (keyWentDown(LEFT)) {
      this.shipSprite.velocity.x -= 7;

    } else if (keyWentUp(LEFT)) {
      this.shipSprite.velocity.x = 0;
    }
    if (keyWentDown(RIGHT)) {
      this.shipSprite.velocity.x += 7;

    } else if (keyWentUp(RIGHT)) {
      this.shipSprite.velocity.x = 0;
    }

    if (keyWentDown(UP_ARROW)) {
      this.shipSprite.velocity.y -= 5;
    } else if (keyWentUp(UP_ARROW)) {
      this.shipSprite.velocity.y = 0;
    }
    if (keyWentDown(DOWN_ARROW)) {
      this.shipSprite.velocity.y += 5;
    } else if (keyWentUp(DOWN_ARROW)) {
      this.shipSprite.velocity.y = 0;
    }
  }

  shootPillBullet() {
    var pillBullet;
    pillBullet = createSprite(this.shipSprite.position.x, this.shipSprite.position.y - 20);
    pillBullet.setCollider('rectangle', 0, 0, 18, 18);
    pillBullet.addAnimation('bullet1', 'assets/p_ball.png');
    pillBullet.setSpeed(7, 270);
    smallLaser.play();
    pillBulletGroup.add(pillBullet);
  }

  shootIudBullet() {
    var iudBullet;
    iudBullet = createSprite(this.shipSprite.position.x, this.shipSprite.position.y - 20);
    iudBullet.setCollider('rectangle', 0, 0, 30, 30);
    iudBullet.addAnimation('bullet2', 'assets/i_ball.png');
    iudBullet.setSpeed(7, 270);
    iudBullet.scale = 2;
    bigRocket.play();
    iudBulletGroup.add(iudBullet);
  }

  activateShield() {
    this.shipSprite.setCollider('rectangle', 0, 0, 131, 30);
    this.shipSprite.changeAnimation('shield');
  }
}
