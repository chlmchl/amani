class FallingObject {

  x = 0;
  y = 0;
  sprite = createSprite(this.x, this.y);

  constructor() {
    this.sprite.setSpeed(5, 90);
    //this.sprite.debug = true;
  }

  shootPillCondition() {
    for (let i = 0; i < pillBulletGroup.length; i++) {
      if (this.sprite.overlap(pillBulletGroup[i])) {
        this.sprite.remove();
        return true;
      }
    }
  }

  shootIudCondition() {
    for (let i = 0; i < iudBulletGroup.length; i++) {
      if (this.sprite.overlap(iudBulletGroup[i])) {
        this.sprite.remove();
        return true;
      }
    }
  }

  condomKill() {
    if (spaceship.shipSprite.overlap(this.sprite) && order === 'activate shield !') {
      this.sprite.remove()
      return true;
    }
    return false;
  }

  killCondition() {
    if (this.sprite.position.y > windowHeight + 100) {
      this.sprite.remove();
      return true;
    }
    return false;
  }

  catchCondition() {
    if (spaceship.shipSprite.overlap(this.sprite)) {
      this.sprite.remove();
      return true;
    }
    return false
  }
}
