window.addEventListener("load", function() {
    setInterval(drawScreen, 1000 / 60)
}, false);

var background = new Image;
background.src = "./res/background1.png";

var UI = new Image;
UI.src = "./res/UI.png";

var GAME_START = 0;
var GAME_OVER = 1;

var gameoverImage = new Image;
gameoverImage.src = "./res/gameover.png";

var gameState = GAME_START;

function drawScreen() {
    var Canvas = document.getElementById("GameCanvas");
    var Context = Canvas.getContext("2d");
    if(gameState == GAME_START){
    for (var i = 0; i < char.length; i++) {
        if ((char[i].x + 50 > boss.x - 140) && (char[i].x < boss.x + 214) &&
            (char[i].y < boss.y + 214) && (char[i].y > boss.y - 96)) {
            targetChar = i;
            char_flag = true;
            break;
        } else char_flag = false;
    }
    if(!myCharDie && char[0].blackout == true){
    Canvas.width = Canvas.width;
    Context.fillStyle = "black";
    Context.fillRect(0,0,1920, 1080);
    Context.save();
    Context.arc(char[0].x + 50, char[0].y + 65, 200, 0, 2*Math.PI);
    Context.clip();
    Context.drawImage(background, 0, 0, 1920, 1080);
    Context.drawImage(charImage[0], char[0].beh * char[0].width,
        char[0].state * char[0].height, char[0].width, char[0].height, char[0].x, char[0].y, 100 * times, 130 * times);
    Context.drawImage(hpBar, char[0].x + 35, char[0].y - 15, 30 * (char[0].hp / char[0].fhp), 5);
    if(char.length > 0){
      for (i = 1; i < char.length; i++) {
          Context.drawImage(charImage[i], char[i].beh * char[i].width,
              char[i].state * char[i].height, char[i].width, char[i].height, char[i].x, char[i].y, 100, 130);
          if(char[i].hp > char[i].fhp) char[i].hp = char[i].fhp;
          Context.drawImage(hpBar, char[i].x + 35, char[i].y - 15, 30 * (char[i].hp / char[i].fhp), 5);
      }
    }
    for (i = 0; i < PBulletArr.length; i++) {
        if (PBulletArr[i].goX == 0 && PBulletArr[i].goY == 0) {
            switch (PBulletArr[i].way) {
                case 1:
                    Context.drawImage(swing_image, char[0].x - PBulletArr[i].x,
                        char[0].y + PBulletArr[i].y);
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
                case 2:
                    Context.save();
                    Context.rotate(90 * Math.PI / 180);
                    Context.drawImage(swing_image, char[0].y + PBulletArr[i].y - 85, (-1) * (char[0].x + PBulletArr[i].x - 5));
                    Context.restore();
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
                case 3:
                    Context.save();
                    Context.rotate(180 * Math.PI / 180);
                    Context.drawImage(swing_image, (-1) * (char[0].x + PBulletArr[i].x), (-1) * (char[0].y + PBulletArr[i].y));
                    Context.restore();
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
                case 4:
                    Context.save();
                    Context.rotate(-90 * Math.PI / 180);
                    Context.drawImage(swing_image, (-1) * (char[0].y + PBulletArr[i].y + 95),
                        char[0].x + PBulletArr[i].x - 41);
                    Context.restore();
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
            }
        } else if (PBulletArr[i].name == "water") {
            Context.drawImage(waterBullet, PBulletArr[i].x, PBulletArr[i].y);
        } else if (PBulletArr[i].name == "tsunami") {
            Context.drawImage(tsunamiBullet, PBulletArr[i].x, PBulletArr[i].y);
        } else if (PBulletArr[i].name == "wind") {
            Context.drawImage(windBullet, PBulletArr[i].x, PBulletArr[i].y);
        } else {
            Context.drawImage(PBullet, PBulletArr[i].x, PBulletArr[i].y, PBulletArr[i].width, PBulletArr[i].height);
        }
    }
    for (i=0;i<BBulletArr.length;i++){
        if (BBulletArr[i].name == "boss") {
            Context.drawImage(bossBullet, BBulletArr[i].x, BBulletArr[i].y);
        } else if (BBulletArr[i].name == "bossA") {
            Context.drawImage(bossBulletA, BBulletArr[i].x, BBulletArr[i].y);
        } else if (BBulletArr[i].name == "smoke_h") {
            Context.drawImage(smokeH, BBulletArr[i].x, BBulletArr[i].y);
        } else if (BBulletArr[i].name == "smoke_v") {
            Context.drawImage(smokeV, BBulletArr[i].x, BBulletArr[i].y);
        }
    }
    Context.drawImage(boss_image, boss.beh * boss.width, boss.state * boss.height,
        boss.width, boss.height, boss.x, boss.y, 150, 180);
    for(i=0;i<Monsters.length;i++){
        if(Monsters[i].name == "rage"){
          Context.drawImage(monster_rage, Monsters[i].x, Monsters[i].y);
        } else {
          Context.drawImage(monster_normal, Monsters[i].x, Monsters[i].y);
        }
      Context.drawImage(hpBar, Monsters[i].x + 5, Monsters[i].y - 15, 30 * (Monsters[i].hp / Monsters[i].fhp), 5);
    }
    for (i = 0; i < effect.length; i++) {
        if (effect[i].owner == 0) {
            switch (effect[i].way) {
                case 1:
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                        char[effect[i].owner].x + effect[i].oneX - gX, char[effect[i].owner].y + effect[i].oneY - gY, effect[i].width * times, effect[i].height * times);
                    break;
                case 2:
                    Context.save();
                    Context.rotate(90 * Math.PI / 180);
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, effect[i].height, effect[i].width, effect[i].height,
                        char[effect[i].owner].y + effect[i].twoY, (-1) * (char[effect[i].owner].x + effect[i].twoX), effect[i].width * times, effect[i].height * times);
                    Context.restore();
                    break;
                case 3:
                    Context.save();
                    Context.rotate(180 * Math.PI / 180);
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height, (-1) * (char[effect[i].owner].x + effect[i].threeX), (-1) * (char[effect[i].owner].y + effect[i].threeY), effect[i].width * times, effect[i].height * times);
                    Context.restore();
                    break;
                case 4:
                    Context.save();
                    Context.rotate(-90 * Math.PI / 180);
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, effect[i].height, effect[i].width, effect[i].height,
                        char[effect[i].owner].x + effect[i].fourX, char[effect[i].owner].y + effect[i].fourY, effect[i].width * times, effect[i].height * times);
                    Context.restore();
                    break;
            }
        } else {
            switch (effect[i].way) {
                case 1:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            boss.x + effect[i].oneX, boss.y + effect[i].oneY, effect[i].width, effect[i].height);
                    } else {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            char[effect[i].owner].x + effect[i].oneX, char[effect[i].owner].y + effect[i].oneY, effect[i].width, effect[i].height);
                    }
                    break;
                case 2:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            boss.x + effect[i].twoX, boss.y + effect[i].twoY, effect[i].width, effect[i].height);
                    } else {
                      Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            char[effect[i].owner].x + effect[i].twoX, char[effect[i].owner].y + effect[i].twoY, effect[i].width, effect[i].height);
                    }
                    break;
                case 3:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height, (boss.x + effect[i].threeX), (boss.y + effect[i].threeY), effect[i].width, effect[i].height);
                    } else {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height, (char[effect[i].owner].x + effect[i].threeX), (char[effect[i].owner].y + effect[i].threeY), effect[i].width, effect[i].height);
                    }
                    break;
                case 4:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            boss.x + effect[i].fourX, boss.y + effect[i].fourY, effect[i].width, effect[i].height);
                    } else {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            char[effect[i].owner].x + effect[i].fourX, char[effect[i].owner].y + effect[i].fourY, effect[i].width, effect[i].height);
                    }
                    break;
            }

        }
    }
    for (i = 0; i < chargeArr.length; i++) {
        if(chargeArr[i].owner == 1){
           Context.drawImage(chargeImage, char[chargeArr[i].owner].x + 45, char[chargeArr[i].owner].y - 10, chargeArr[i].width * char[0].charge / 100, chargeArr[i].height);
        } else{
        Context.drawImage(chargeImage, char[chargeArr[i].owner].x + 35, char[chargeArr[i].owner].y - 10, chargeArr[i].width * char[0].charge / 100, chargeArr[i].height);
        }
    }
    Context.restore();
    } else {
    Canvas.width = Canvas.width;

    Context.drawImage(background, 0, 0, 1980, 1080);
    if(char.length>=2){
    Context.drawImage(charImage[1], char[1].beh * char[1].width,
        char[1].state * char[1].height, char[1].width, char[1].height, char[1].x, char[1].y, 100 * times, 130 * times);
    Context.drawImage(hpBar, char[1].x + 35, char[1].y - 15, 30 * (char[1].hp / char[1].fhp), 5);
    }
      for (i = 0; i < char.length; i++) {
        if(i != 1){
        Context.drawImage(charImage[i], char[i].beh * char[i].width,
            char[i].state * char[i].height, char[i].width, char[i].height, char[i].x, char[i].y, 100, 130);
        if(char[i].hp > char[i].fhp) char[i].hp = char[i].fhp;
        Context.drawImage(hpBar, char[i].x + 35, char[i].y - 15, 30 * (char[i].hp / char[i].fhp), 5);
        }
    }
    Context.drawImage(boss_image, boss.beh * boss.width, boss.state * boss.height,
        boss.width, boss.height, boss.x, boss.y, 150, 180);

    for (i = 0; i < PBulletArr.length; i++) {
        if (PBulletArr[i].goX == 0 && PBulletArr[i].goY == 0) {
            switch (PBulletArr[i].way) {
                case 1:
                    Context.drawImage(swing_image, char[0].x - PBulletArr[i].x,
                        char[0].y + PBulletArr[i].y);
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
                case 2:
                    Context.save();
                    Context.rotate(90 * Math.PI / 180);
                    Context.drawImage(swing_image, char[0].y + PBulletArr[i].y - 85, (-1) * (char[0].x + PBulletArr[i].x - 5));
                    Context.restore();
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
                case 3:
                    Context.save();
                    Context.rotate(180 * Math.PI / 180);
                    Context.drawImage(swing_image, (-1) * (char[0].x + PBulletArr[i].x), (-1) * (char[0].y + PBulletArr[i].y));
                    Context.restore();
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
                case 4:
                    Context.save();
                    Context.rotate(-90 * Math.PI / 180);
                    Context.drawImage(swing_image, (-1) * (char[0].y + PBulletArr[i].y + 95),
                        char[0].x + PBulletArr[i].x - 41);
                    Context.restore();
                    var a = i;
                    setTimeout(function() {
                        PBulletArr.splice(a, 1)
                    }, 200);
                    break;
            }
        } else if (PBulletArr[i].name == "water") {
            Context.drawImage(waterBullet, PBulletArr[i].x, PBulletArr[i].y);
        } else if (PBulletArr[i].name == "tsunami") {
            Context.drawImage(tsunamiBullet, PBulletArr[i].x, PBulletArr[i].y);
        } else if (PBulletArr[i].name == "wind") {
            Context.drawImage(windBullet, PBulletArr[i].x, PBulletArr[i].y);
        } else {
            Context.drawImage(PBullet, PBulletArr[i].x, PBulletArr[i].y, PBulletArr[i].width, PBulletArr[i].height);
        }
    }
    for (i=0;i<BBulletArr.length;i++){
        if (BBulletArr[i].name == "boss") {
            Context.drawImage(bossBullet, BBulletArr[i].x, BBulletArr[i].y);
        } else if (BBulletArr[i].name == "bossA") {
            Context.drawImage(bossBulletA, BBulletArr[i].x, BBulletArr[i].y);
        } else if (BBulletArr[i].name == "smoke_h") {
            Context.drawImage(smokeH, BBulletArr[i].x, BBulletArr[i].y);
        } else if (BBulletArr[i].name == "smoke_v") {
            Context.drawImage(smokeV, BBulletArr[i].x, BBulletArr[i].y);
        }
    }
    for(i=0;i<Monsters.length;i++){
        if(Monsters[i].name == "rage"){
          Context.drawImage(monster_rage, Monsters[i].x, Monsters[i].y);
        } else {
          Context.drawImage(monster_normal, Monsters[i].x, Monsters[i].y);
        }
      Context.drawImage(hpBar, Monsters[i].x + 5, Monsters[i].y - 15, 30 * (Monsters[i].hp / Monsters[i].fhp), 5);
    }
    for (i = 0; i < effect.length; i++) {
        if (effect[i].owner == 1) {
            switch (effect[i].way) {
                case 1:
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                        char[effect[i].owner].x + effect[i].oneX - gX, char[effect[i].owner].y + effect[i].oneY - gY, effect[i].width * times, effect[i].height * times);
                    break;
                case 2:
                    Context.save();
                    Context.rotate(90 * Math.PI / 180);
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, effect[i].height, effect[i].width, effect[i].height,
                        char[effect[i].owner].y + effect[i].twoY, (-1) * (char[effect[i].owner].x + effect[i].twoX), effect[i].width * times, effect[i].height * times);
                    Context.restore();
                    break;
                case 3:
                    Context.save();
                    Context.rotate(180 * Math.PI / 180);
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height, (-1) * (char[effect[i].owner].x + effect[i].threeX), (-1) * (char[effect[i].owner].y + effect[i].threeY), effect[i].width * times, effect[i].height * times);
                    Context.restore();
                    break;
                case 4:
                    Context.save();
                    Context.rotate(-90 * Math.PI / 180);
                    Context.drawImage(effect[i].image, effect[i].state * effect[i].width, effect[i].height, effect[i].width, effect[i].height,
                        char[effect[i].owner].x + effect[i].fourX, char[effect[i].owner].y + effect[i].fourY, effect[i].width * times, effect[i].height * times);
                    Context.restore();
                    break;
            }
        } else {
            switch (effect[i].way) {
                case 1:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            boss.x + effect[i].oneX, boss.y + effect[i].oneY, effect[i].width, effect[i].height);
                    } else {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            char[effect[i].owner].x + effect[i].oneX, char[effect[i].owner].y + effect[i].oneY, effect[i].width, effect[i].height);
                    }
                    break;
                case 2:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            boss.x + effect[i].twoX, boss.y + effect[i].twoY, effect[i].width, effect[i].height);
                    } else {
                      Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            char[effect[i].owner].x + effect[i].twoX, char[effect[i].owner].y + effect[i].twoY, effect[i].width, effect[i].height);
                    }
                    break;
                case 3:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height, (boss.x + effect[i].threeX), (boss.y + effect[i].threeY), effect[i].width, effect[i].height);
                    } else {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height, (char[effect[i].owner].x + effect[i].threeX), (char[effect[i].owner].y + effect[i].threeY), effect[i].width, effect[i].height);
                    }
                    break;
                case 4:
                    if (effect[i].owner == "boss") {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            boss.x + effect[i].fourX, boss.y + effect[i].fourY, effect[i].width, effect[i].height);
                    } else {
                        Context.drawImage(effect[i].image, effect[i].state * effect[i].width, 0, effect[i].width, effect[i].height,
                            char[effect[i].owner].x + effect[i].fourX, char[effect[i].owner].y + effect[i].fourY, effect[i].width, effect[i].height);
                    }
                    break;
            }

        }
    }
    for (i = 0; i < chargeArr.length; i++) {
        if(chargeArr[i].owner == 1){
           Context.drawImage(chargeImage, char[chargeArr[i].owner].x + 45, char[chargeArr[i].owner].y - 10, chargeArr[i].width * char[0].charge / 100, chargeArr[i].height);
        } else{
        Context.drawImage(chargeImage, char[chargeArr[i].owner].x + 35, char[chargeArr[i].owner].y - 10, chargeArr[i].width * char[0].charge / 100, chargeArr[i].height);
        }
    }
    }
    Context.drawImage(UI, 0, 0);
    if(!myCharDie){
      Context.drawImage(hpBar, 615, 983, 1020 * char[0].hp / char[0].fhp, 18);
      Context.save();
      Context.globalAlpha = 1 - (char[0].ACool / 5000);
      Context.drawImage(ASkill, 730, 890, 70, 65);
      Context.restore();
      Context.drawImage(hpBar, 375, 30, 1383 * (boss.hp / boss.fhp), 20);
      Context.save();
      Context.globalAlpha = 1 - (char[0].SCool / 5000);
      Context.drawImage(SSkill, 922, 890, 70, 65);
      Context.restore();
      Context.drawImage(hpBar, 375, 30, 1383 * (boss.hp / boss.fhp), 20);
      Context.save();
      Context.globalAlpha = 1 - (char[0].DCool / 5000);
      Context.drawImage(DSkill, 1115, 890, 70, 65);
      Context.restore();
      Context.drawImage(hpBar, 375, 30, 1383 * (boss.hp / boss.fhp), 20);
      Context.save();
      Context.globalAlpha = 1 - (char[0].FCool / 5000);
      Context.drawImage(FSkill, 1310, 890, 70, 65);
      Context.restore();
    }
      Context.drawImage(hpBar, 375, 30, 1383 * (boss.hp / boss.fhp), 20);
    } else {
      Canvas.width = Canvas.width;
      Context.drawImage(gameoverImage,403,403);
    }
}
