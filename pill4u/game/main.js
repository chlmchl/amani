let pillGroup;

let glassOfWater, healthBar, missMessage;

let backgroundMusic, pillCatch1, pillCatch2, pillMiss;

var gameOverUI;

let pillMissed = 0;
let numbers = 0;
let message = 'take your pill';

let randomSpawn, randomSound;

function preload() {
  soundFormats('mp3');
  backgroundMusic = loadSound('assets/pill_music.mp3');
  pillCatch1 = loadSound('assets/pill_catch.mp3');
  pillCatch2 = loadSound('assets/pill_catch2.mp3');
  pillMiss = loadSound('assets/miss_pill.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  pillGroup = new Group();

  glassOfWater = new Glass();
  healthBar = new HealthBar();

  backgroundMusic.play();
  backgroundMusic.setVolume(0.2);
  pillCatch1.setVolume(0.6);
  pillCatch2.setVolume(0.6);
  pillMiss.setVolume(0.4);

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

  missMessage = createSprite(windowWidth / 2, windowHeight / 2);
  missMessage.addAnimation('miss', 'assets/miss_message.png');
  missMessage.visible = false;
}

function draw() {
  background(67, 103, 237);

  if (frameCount % 40 == 0) {
    randomSpawn = floor(random(0, 2));
    if (randomSpawn == 0) {
      pillGroup.push(new FallingObject());
    }
  }

  for (let i = 0; i < pillGroup.length; i++) {
    if (pillGroup[i].killCondition()) {
      pillGroup.splice(i, 1);
      pillMiss.play();
      pillMissed += 1;
      message = 'you missed your pill !'
    } else if (pillGroup[i].catchCondition()) {
      pillGroup.splice(i, 1);
      randomSound = floor(random(0, 2))
      if (randomSound == 0) {
        pillCatch1.play();
      } else if (randomSound == 1) {
        pillCatch2.play();
      }
    }
  }

  if (pillMissed == 1) {
    healthBar.sprite.changeAnimation('5 PV');
  } else if (pillMissed == 2) {
    healthBar.sprite.changeAnimation('4 PV');
  } else if (pillMissed == 3) {
    healthBar.sprite.changeAnimation('3 PV');
  } else if (pillMissed == 4) {
    healthBar.sprite.changeAnimation('2 PV');
  } else if (pillMissed == 5) {
    healthBar.sprite.changeAnimation('1 PV');
  } else if (pillMissed == 6) {
    gameOver();
  }

  glassOfWater.move();

  missMessage.scale = 0.5 + sin(frameCount / 30) / 20;

  noStroke();
  fill(44, 81, 198);
  rect(0, windowHeight, windowWidth, 0 - windowHeight / 7.5);

  counter();

  drawSprites();
  drawSprite(healthBar.sprite);
  drawSprite(missMessage);

}

function counter() {
  if (message === 'you missed your pill !') {
    numbers++;
    missMessage.visible = true;
    if (numbers > 200) {
      missMessage.visible = false;
      message = 'take your pill';
      numbers = 0;
    }
  }
}

function gameOver() {
  for (let i = 0; i < allSprites.length; i++) {
    allSprites[i].visible = false;
  }
    rect.visible = false;
    healthBar.visible = false;
    pillGroup.length = 0;

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
      window.location.href = 'http://127.0.0.1:5500/pill4u/game/index.html';
    };

    gameOverUI_no.onMousePressed = function() {
      window.location.href = 'http://127.0.0.1:5500/part4.html';
    };
}


