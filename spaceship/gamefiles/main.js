let spaceship;

var spermGroup, virusGroup;

var pillGroup, iudGroup, condomGroup;

var pillBulletGroup, iudBulletGroup;

var gameOverUI, gameOverMessage, protectionMessage;

let backgroundMusic, powerUp, shieldActivated, smallLaser, bigRocket, enemyExplosion;

var hitsTaken = 0;

var order = "don't shoot !";
var numbers = 0;

function preload() {
  soundFormats('mp3');
  backgroundMusic = loadSound('assets/spaceship_music.mp3');
  powerUp = loadSound('assets/power_up.mp3');
  shieldActivated = loadSound('assets/spaceship_shield.mp3');
  smallLaser = loadSound('assets/spaceship_small_shoot.mp3');
  bigRocket = loadSound('assets/spaceship_shoot.mp3');
  enemyExplosion = loadSound('assets/enemy_destroyed.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spermGroup = new Group();
  virusGroup = new Group();

  pillBulletGroup = new Group();
  iudBulletGroup = new Group();

  pillGroup = new Group();
  iudGroup = new Group();
  condomGroup = new Group();

  spaceship = new Spaceship();

  backgroundMusic.play();
  backgroundMusic.setVolume(0.15);
  powerUp.setVolume(0.5);
  shieldActivated.setVolume(0.5);
  smallLaser.setVolume(0.6);
  bigRocket.setVolume(0.3);
  enemyExplosion.setVolume(0.65);

  gameOverUI = createSprite(windowWidth/2, windowHeight/4);
  gameOverUI.addAnimation('gameOver', 'assets/gameOver.png');
  gameOverUI.visible = false;
  gameOverUI_playAgain = createSprite(windowWidth/2, 3.1*windowHeight/4);
  gameOverUI_playAgain.addAnimation('playAgain', 'assets/playagain.png');
  gameOverUI_playAgain.visible = false;
  gameOverUI_score = createSprite(windowWidth/2, 2.60*windowHeight/4);
  gameOverUI_score.addAnimation('score', 'assets/score.png');
  gameOverUI_score.visible = false;
  gameOverUI_HighScore = createSprite(0.4*windowWidth/2, 2.65*windowHeight/4);
  gameOverUI_HighScore.addAnimation('HighScore', 'assets/HighScore.png');
  gameOverUI_HighScore.visible = false;
  gameOverUI_yes = createSprite(0.9*windowWidth/3, 4.3*windowHeight/5);
  gameOverUI_yes.addAnimation('yes', 'assets/yes.png');
  gameOverUI_yes.visible = false;
  gameOverUI_no = createSprite(2.1*windowWidth/3, 4.3*windowHeight/5);
  gameOverUI_no.addAnimation('no', 'assets/no.png');
  gameOverUI_no.visible = false;

  gameOverMessage = createSprite(windowWidth / 2, windowHeight / 2);
  gameOverMessage.addAnimation('gameOver', 'assets/pregnant_message.png');
  gameOverMessage.addAnimation('sti', 'assets/sti_message.png');
  gameOverMessage.visible = false;

  protectionMessage = createSprite(windowWidth / 2, windowHeight / 2);
  protectionMessage.addAnimation('pregnant', 'assets/protection_message.png');
  protectionMessage.visible = false;
}

function draw() {
  background(254, 101, 209);

  if (frameCount % 100 == 0) {
    spawnRandomEnemy();
  }

  if (frameCount % 175 == 0) {
    spawnRandomBonus();
  }


  for (let i = 0; i < spermGroup.length; i++) {
    if (spermGroup[i].killCondition()) {
      spermGroup.splice(i, 1);
      hitsTaken += 1;
      if (hitsTaken >= 5) {
        gameOverMessage.changeAnimation('pregnant');
      }
    } else if (spermGroup[i].shootPillCondition()) {
      spermGroup.splice(i, 1);
      enemyExplosion.play();
    } else if (spermGroup[i].shootIudCondition()) {
      spermGroup.splice(i, 1);
      enemyExplosion.play();
    } else if (spermGroup[i].condomKill()) {
      spermGroup.splice(i, 1);
      enemyExplosion.play();
    }
  }

  for (let i = 0; i < virusGroup.length; i++) {
    virusGroup[i].virusRotate();
    virusGroup[i].virusZigZag();
    if (virusGroup[i].killCondition()) {
      virusGroup.splice(i, 1);
      hitsTaken += 5;
      if (hitsTaken >= 5) {
        gameOverMessage.changeAnimation('sti');
      }
    } else if (virusGroup[i].condomKill()) {
      virusGroup.slice(i, 1);
      enemyExplosion.play();
    }
  }

  for (let i = 0; i < pillGroup.length; i++) {
    if (pillGroup[i].killCondition()) {
      pillGroup.splice(i, 1);
    } else if (pillGroup[i].catchCondition()) {
      pillGroup.splice(i, 1);
      powerUp.play();
      order = 'shoot !'
      protectionMessage.visible = true;
    }
  }

  for (let i = 0; i < iudGroup.length; i++) {
    counter();
    if (iudGroup[i].killCondition()) {
      iudGroup.splice(i, 1);
    } else if (iudGroup[i].catchCondition()) {
      iudGroup.splice(i, 1);
      powerUp.play();
      order = 'bazooka !'
      protectionMessage.visible = true;
    }
  }

  for (let i = 0; i < condomGroup.length; i++) {
    if (condomGroup[i].killCondition()) {
      condomGroup.splice(i, 1);
    } else if (condomGroup[i].catchCondition()) {
      condomGroup.splice(i, 1);
      shieldActivated.play();
      order = 'activate shield !'
      protectionMessage.visible = true;
    }
  }

  if (order === 'shoot !' && frameCount % 20 == 0) {
    spaceship.shootPillBullet();
  }

  if (order === 'bazooka !' && frameCount % 40 == 0) {
    spaceship.shootIudBullet();
  }

  if (order === 'activate shield !') {
    spaceship.activateShield();
  }

  spaceship.move();

  counter();
  gameOver();

  protectionMessage.scale = 0.5 + sin(frameCount/30) / 15;

  console.log(protectionMessage.visible);
  console.log(numbers);

  drawSprites();
}

function spawnRandomEnemy() {
  var randomEnemy = floor(random(0, 10))

  if (randomEnemy == 0) {
    virusGroup.push(new Virus());
  } else {
    spermGroup.push(new Sperm());
  }
}

function spawnRandomBonus() {
  var randomEnemy = floor(random(0, 3))

  if (randomEnemy == 0)
    pillGroup.push(new Pbonus());
  if (randomEnemy == 1)
    iudGroup.push(new Ibonus());
  if (randomEnemy == 2)
    condomGroup.push(new Cbonus());
}

function counter() {
  if (order === 'shoot !' || order === 'bazooka !' || order === 'activate shield !') {
    numbers++;
    if (numbers > 800) {
      numbers = 0;
      order = "don't shoot!";
      spaceship.shipSprite.changeAnimation('spaceship');
    }
  }
  if (numbers > 200) {
    protectionMessage.visible = false;
  }
}

function gameOver() {
  if (hitsTaken >= 5) {
    for (let i = 0; i < allSprites.length; i++) {
      allSprites[i].visible = false;
    }
    for (let i = 0; i < spermGroup.length; i++) {
      spermGroup[i].sprite.remove();
    }
    for (let i = 0; i < virusGroup.length; i++) {
      virusGroup[i].sprite.remove();
    }
    gameOverMessage.visible = true;
    gameOverMessage.scale = 0.4 + sin(frameCount/30) / 15;

    gameOverUI.visible = true;
    gameOverUI.scale = 0.13;
    gameOverUI_playAgain.visible = true;
    gameOverUI_playAgain.scale = 0.1;
    gameOverUI_score.visible = true;
    gameOverUI_score.scale = 0.1;
    gameOverUI_HighScore.visible = true;
    gameOverUI_HighScore.scale = 0.06 + sin(frameCount/20) / 150;
    gameOverUI_yes.visible = true;
    gameOverUI_yes.scale = 0.18;
    gameOverUI_no.visible = true;
    gameOverUI_no.scale = 0.18;

    gameOverUI_yes.onMousePressed = function() {
      window.location.href = 'http://127.0.0.1:5500/spaceship/gamefiles/index.html';
    };

    gameOverUI_no.onMousePressed = function() {
      window.location.href = 'http://127.0.0.1:5500/part2.html';
    };
  }
}


