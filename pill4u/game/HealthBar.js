class HealthBar {

  sprite;
  message;
  x = windowWidth / 2;
  y = windowHeight / 9;

  constructor() {
    this.sprite = createSprite(this.x, this.y);
    this.sprite.scale = 0.15;
    this.sprite.addAnimation('6 PV', 'assets/health_bar1.png');
    this.sprite.addAnimation('5 PV', 'assets/health_bar2.png');
    this.sprite.addAnimation('4 PV', 'assets/health_bar3.png');
    this.sprite.addAnimation('3 PV', 'assets/health_bar4.png');
    this.sprite.addAnimation('2 PV', 'assets/health_bar5.png');
    this.sprite.addAnimation('1 PV', 'assets/health_bar6.png');
  }
}
