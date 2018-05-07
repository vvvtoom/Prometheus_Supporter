window.addEventListener("load", function() {
    setInterval(bossmv, 100);
}, false);

window.addEventListener("load", function() {
    setInterval(bossMove, 40)
}, false);

window.addEventListener("load", function() {
    setInterval(monsterMv, 40)
}, false);

window.addEventListener("load", function() {
    setInterval(monsterAtt, 2000)
}, false);

window.addEventListener("load", function(){setInterval(bossAttack,500)}, false);
window.addEventListener("load", function(){setInterval(monsterTimer,1000)}, false);
window.addEventListener("load", function(){setInterval(bossSkill, 6000)}, false);

var boss_image = new Image;
boss_image.src = "./res/boss.png";

var smokeH = new Image;
smokeH.src = "./res/smoke_H.png";

var smokeV = new Image;
smokeV.src = "./res/smoke_V.png";

function bossmv() {
    if (boss.state_limit[boss.state] <= boss.beh) boss.beh = 0;
    else boss.beh++;
}

var boss = {
    width: 128,
    height: 128,
    hp: 1000000,
    fhp: 1000000,
    speed: 4,
    ADamage: 400,
    MDamage: 30,
    state: 2,
  ASpeed:3,
    beh: 0,
    x: 800,
    y: 500,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    state_limit: new Array(4, 4, 3, 3),
    mvRand: 0,
    timeRand: 0,
    silence: false,
    waterStack: 0,
    iceStack: 0,
  windhit:false,
  rage:false,
  darkize:false,
  stun:false
}

var bossBullet = new Image;
bossBullet.src = "./res/bullet.png";

var bossBulletA = new Image;
bossBulletA.src = "./res/bulletA.png";

var char_flag = false;

var targetChar = 0;

boss_image.onload = function() {
    boss.width = this.width / 5;
    boss.height = this.height / 4;
}

var stop = function() {
    boss.mvLeft = false;
    boss.mvRight = false;
    boss.mvUp = false;
    boss.mvDown = false;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 2;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(goLeft, 1000 * boss.timeRand);
            break;
    }
}

var goLeft = function() {
    boss.mvLeft = true;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 0;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goRight = function() {
    boss.mvRight = true;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 1;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goLeft, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goUp = function() {
    boss.mvUp = true;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 3;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goLeft, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goDown = function() {
    boss.mvDown = true;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 2;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goLeft, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goCancelLeft = function() {
    boss.mvLeft = true;
    boss.mvRight = false;
    boss.mvUp = false;
    boss.mvDown = false;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 0;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goCancelRight = function() {
    boss.mvRight = true;
    boss.mvLeft = false;
    boss.mvUp = false;
    boss.mvDown = false;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.timeRand = Math.random();
    boss.state = 1;
    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goCancelUp = function() {
    boss.mvUp = true;
    boss.mvRight = false;
    boss.mvLeft = false;
    boss.mvDown = false;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.state = 3;
    timeRand = Math.random();

    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

var goCancelDown = function() {
    boss.mvDown = true;
    boss.mvRight = false;
    boss.mvUp = false;
    boss.mvLeft = false;
    boss.mvRand = Math.floor(Math.random() * 8);
    boss.state = 2;
    timeRand = Math.random();

    switch (boss.mvRand) {
        case 0:
            setTimeout(goRight, 1000 * boss.timeRand);
            break;
        case 1:
            setTimeout(goUp, 1000 * boss.timeRand);
            break;
        case 2:
            setTimeout(goDown, 1000 * boss.timeRand);
            break;
        case 3:
            setTimeout(goCancelLeft, 1000 * boss.timeRand);
            break;
        case 4:
            setTimeout(goCancelRight, 1000 * boss.timeRand);
            break;
        case 5:
            setTimeout(goCancelUp, 1000 * boss.timeRand);
            break;
        case 6:
            setTimeout(goCancelDown, 1000 * boss.timeRand);
            break;
        case 7:
            setTimeout(stop, 1000 * boss.timeRand);
            break;
    }
}

function bossAttack(){
   var tarChar = Math.floor(Math.random()*char.length);
   var tarX = char[tarChar].x + 60;
   var tarY = char[tarChar].y + 90;
   var theta = Math.atan2(tarY - boss.y - 64, tarX - boss.x - 64);
   BBulletArr.push({
                     x: boss.x + 64,
                     y: boss.y + 64,
                   width: 14,
                   height: 13,
                     goX: Math.cos(theta),
                     goY: Math.sin(theta),
                     damage: 0,
                   name: "boss",
                   speed:10
   });
   BBulletArr[BBulletArr.length-1].damage = BossDamage();
}

function blackjail(){
   var tarChar = Math.floor(Math.random()*char.length);
   var tarX = char[tarChar].x + 60;
   var tarY = char[tarChar].y + 90;
   var theta = Math.atan2(tarY - boss.y - 64, tarX - boss.x - 64);
   BBulletArr.push({
                     x: boss.x + 64,
                     y: boss.y + 64,
                   width: 14,
                   height: 13,
                     goX: Math.cos(theta),
                     goY: Math.sin(theta),
                     damage: 0,
                   name: "bossA",
                   speed:10
   });
   BBulletArr[BBulletArr.length-1].damage = BossDamage();
}

function summonSmoke(){
  char[0].smoke = false;
  var randNum = Math.floor(Math.random()*4);
  switch(randNum){
    case 0:
      BBulletArr.push({
                        x: 186,
                        y: 0,
                      width: 1548,
                      height: 480,
                        goX: 0,
                        goY: 1,
                        damage: 0,
                      name: "smoke_h",
                      speed:2
                    });
      var a = BBulletArr.length-1;
      BBulletArr[a].damage =
        (boss.rage)? 2.0 * BossDamage() : 1.5 * BossDamage();
      setTimeout(function(){
        for(var i=0;i<BBulletArr.length;i++){
          if(BBulletArr[i].name == "smoke_h") BBulletArr.splice(i, 1);
        }
      }, 5000);
      break;
    case 1:
      BBulletArr.push({
                        x: 0,
                        y: 24,
                      width: 652,
                      height: 1032,
                        goX: 1,
                        goY: 0,
                        damage: 0,
                      name: "smoke_v",
                      speed:3
                    });

      var a = BBulletArr.length-1;
      BBulletArr[a].damage =
        (boss.rage)? 2.0 * BossDamage() : 1.5 * BossDamage();
      setTimeout(function(){
        for(var i=0;i<BBulletArr.length;i++){
          if(BBulletArr[i].name == "smoke_v") BBulletArr.splice(i, 1);
        }
      }, 5000);
      break;
    case 2:
      BBulletArr.push({
                        x: 186,
                        y: 1080,
                      width: 1548,
                      height: 480,
                        goX: 0,
                        goY: -1,
                        damage: 0,
                      name: "smoke_h",
                      speed:5
                    });

      var a = BBulletArr.length-1;
      BBulletArr[a].damage =
        (boss.rage)? 2.0 * BossDamage() : 1.5 * BossDamage();
      setTimeout(function(){
        for(var i=0;i<BBulletArr.length;i++){
          if(BBulletArr[i].name == "smoke_h") BBulletArr.splice(i, 1);
        }
      }, 5000);
      break;
    case 3:
      BBulletArr.push({
                        x: 1920,
                        y: 24,
                      width: 652,
                      height: 1032,
                        goX: -1,
                        goY: 0,
                        damage: 0,
                      name: "smoke_v",
                      speed:5
                    });

      var a = BBulletArr.length-1;
      BBulletArr[a].damage =
        (boss.rage)? 2.0 * BossDamage() : 1.5 * BossDamage();
      setTimeout(function(){
        for(var i=0;i<BBulletArr.length;i++){
          if(BBulletArr[i].name == "smoke_v") BBulletArr.splice(i, 1);
        }
      }, 5000);
      break;
  }
}

function bossMove() {
    if (char_flag == true && boss.speed != 0) {
        var theta = Math.atan2(char[targetChar].y + 30 - boss.y, char[targetChar].x - boss.x);
        boss.goX = Math.cos(theta) * 3;
        boss.goY = Math.sin(theta) * 3;
        boss.x += boss.goX;
        boss.y += boss.goY;
        if(Math.abs(boss.goX) > Math.abs(boss.goY)){
          if(boss.goX > 0) boss.state = 1;
          else boss.state = 0;
        } else if(Math.abs(boss.goX) < Math.abs(boss.goY)){
          if(boss.goY > 0) boss.state = 2;
          else boss.state = 3;
        }
    } else if(char_flag == true && boss.speed == 0){
      boss.x += boss.speed;
      boss.y += boss.speed;
    }else if (char_flag == false) {
        if (boss.mvLeft == true) boss.x -= boss.speed;
        if (boss.mvRight == true) boss.x += boss.speed;
        if (boss.mvUp == true) boss.y -= boss.speed;
        if (boss.mvDown == true) boss.y += boss.speed;
    }
    if (boss.x < 162) boss.x = 162;
    if (boss.x > 1684) boss.x = 1684;
    if (boss.y < 112) boss.y = 112;
    if (boss.y > 806) boss.y = 806;
    if(boss.fhp * 0.1 >= boss.hp) boss.rage = true;
}

function BossDamage(){
  return Math.floor(Math.random() * (boss.ADamage * 1.2 -
      boss.ADamage * 0.8)) + boss.ADamage * 0.8;
}

function BossGotDamage(damage){
  if(boss.rage && boss.darkize){
    boss.hp -= (Math.floor(Math.random()*2) == 1)? damage:1;
  } else if(!boss.rage && boss.darkize){
    boss.hp -= (Math.floor(Math.random()*2) == 1)? damage:damage * 0.1;
  } else{
    boss.hp -= damage;
  }
}

function GodsRage(){
  char[0].silence = true;
  clearInterval(windInterval);
  setTimeout(function(){
    char[0].silence = false;
  },(boss.rage)? 20000:10000);
}

function beDark(){
  boss.darkize = true;
  setTimeout(function(){
    boss.darkize = false;
  },(boss.rage)? 20000:10000);
}

function MonsterSummon(){
  if(boss.rage){
      Monsters.push({
  width:65,
  height:59,
  x:boss.x + 60,
  y:boss.y + 90,
  goX:0,
  goY:0,
  fhp: 8000,
  hp: 8000,
  name:"rage",
  lifetime:20,
  target:0,
  damage:200,
  windhit:false
});
  } else{
      Monsters.push({
  width:65,
  height:59,
  x:boss.x + 60,
  y:boss.y + 90,
  goX:0,
  goY:0,
  fhp: 4000,
  hp: 4000,
  name:"normal",
  lifetime:10,
  target:0,
  damage:200,
  windhit:false
});
  }
  Monsters[Monsters.length - 1].target = Math.floor(Math.random()*char.length);
}

var monster = {
  width:65,
  height:65,
  x:boss.x + 60,
  y:boss.y + 90,
  goX:0,
  goY:0,
  fhp: 4000,
  hp: 4000,
  name:"normal",
  lifetime:0,
  target:0,
  damage:200,
  windhit:false
}

var monster_normal = new Image;
monster_normal.src = "./res/monster_normal.png";

var monster_rage = new Image;
monster_rage.src = "./res/monster_rage.png";

var Monsters = new Array();

function monsterMv(){
  for(var i=0;i<Monsters.length;i++){
    var theta = Math.atan2(char[Monsters[i].target]['y'] - Monsters[i].y + 90, char[Monsters[i].target].x - Monsters[i].x + 60);
    Monsters[i]['goX'] = Math.cos(theta);
    Monsters[i]['goY'] = Math.sin(theta);
    Monsters[i]['x'] += Monsters[i]['goX'] * 3;
    Monsters[i]['y'] += Monsters[i]['goY'] * 3;

    if(Monsters[i].hp <= 0){
      Monsters.splice(i, 1);
      break;
    }
    if (Monsters[i].x < 162) Monsters[i].x = 162;
    if (Monsters[i].x > 1684) Monsters[i].x = 1684;
    if (Monsters[i].y < 112) Monsters[i].y = 112;
    if (Monsters[i].y > 806) Monsters[i].y = 806;
  }
}

function monsterAtt(){
  for(var i=0;i<char.length;i++){
    for(var j=0;j<Monsters.length;j++){
    if ((Monsters[j].x + Monsters[j].width > char[i].x) && (Monsters[j].x< char[i].x + char[i].width) &&
            (Monsters[j].y < char[i].y + char[i].height) && (Monsters[j].y + 108 > char[i].y)){
      charGotDamage(i, Monsters[j].damage);
    }
  }
}
}

function bossSkill(){
  var randNum = Math.floor(Math.random()*100);
  if(randNum == 99) GodsRage();
  else if(randNum >= 51) blackjail();
  else if(randNum >= 34) beDark();
  else if(randNum >= 17) summonSmoke();
  else MonsterSummon();
}

function monsterTimer(){
  for(var i=0;i<Monsters.length;i++){
    Monsters[i].lifetime--;
    if(Monsters[i].lifetime <= 0){
      Monsters.splice(i, 1);
    }
  }
}
