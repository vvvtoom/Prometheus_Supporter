window.addEventListener("load", function() {
    setInterval(charmv, 250)
}, false);

window.addEventListener("load", function() {
    setInterval(moveInterval, 40)
}, false);

var hpBar = new Image;
hpBar.src = "./res/hpbar.png";

var charImage = new Array(4);

var myCharDie = false;

charImage[1] = new Image;
charImage[1].src = "./res/char_0.png";
charImage[2] = new Image;
charImage[2].src = "./res/char_1.png";
charImage[3] = new Image;
charImage[3].src = "./res/char_2.png";
charImage[0] = new Image;
charImage[0].src = "./res/char_3.png";

charImage[0].onload = function() {
    char[0].width = this.width / 4;
    char[0].height = this.height / 8;
}

charImage[1].onload = function() {
    char[1].width = this.width / 4;
    char[1].height = this.height / 8;
}

charImage[2].onload = function() {
    char[2].width = this.width / 4;
    char[2].height = this.height / 8;
}

charImage[3].onload = function() {
    char[3].width = this.width / 4;
    char[3].height = this.height / 8;
}

var times = 1;

var char = new Array(4);

char[0] = {
    hp: 2500,
    fhp: 2500,
    ADamage: 80,
    ADefend: 15,
    MDefend: 15,
    ASpeed: 1,
    stack: 0,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    PCool: 0,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
  stack:0,
    beh: 0,
    state_temp: 0,
    x: 260,
    y: 200,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    silence: false,
    charging: false,
  shield:false,
  critical:5,
  critDamage:1.5,
  blackout:false,
  smoke:false,
  contri:0
}

char[1] = {
    hp: 3000,
    fhp: 3000,
    ADamage: 200,
    ADefend: 30,
    MDefend: 20,
    ASpeed: 2,
    stack: 0,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    gigan: false,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
    beh: 0,
    state_temp: 0,
    x: 162,
    y: 112,
  critical:5,
  critDamage:1.5,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    silence: false,
    charge: 0,
    charging: false,
  blackout:false,
  smoke:false,
  rushing:false,
  contri:0
}

char[2] = {
    hp: 2000,
    fhp: 2000,
    MDamage: 200,
    ADefend: 15,
    MDefend: 15,
  ASpeed:2,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
    beh: 0,
    state_temp: 0,
    x: 260,
    y: 112,
  stack:0,
  critical:5,
  critDamage:1.5,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    charge: 0,
    silence: false,
    charging: false,
  blackout:false,
  smoke:false,
  contri:0
}

char[3] = {
    hp: 1600,
    fhp: 1600,
    ADamage: 400,
    ADefend: 10,
    MDefend: 10,
    ASpeed: 2,
    stack: 0,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
    beh: 0,
    stack:0,
    state_temp: 0,
    x: 168,
    y: 200,
  critical:5,
  critDamage:1.5,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    silence: false,
    charging: false,
  charge:0,
  dashing:false,
  blackout:false,
  smoke:false,
  contri:0
}

function mvCheck() {
    for (var i = 0; i < char.length; i++) {
        if (char[i].mvLeft) return 'Left';
        else if (char[i].mvRight) return 'Right';
        else if (char[i].mvUp) return 'Up';
        else if (char[i].mvDown) return 'Down';
    }
}

function moveInterval() {
    for (var i = 0; i < char.length; i++) {
        if (char[i].mvLeft == true) char[i].x -= char[i].speed;
        if (char[i].mvRight == true) char[i].x += char[i].speed;
        if (char[i].mvUp == true) char[i].y -= char[i].speed;
        if (char[i].mvDown == true) char[i].y += char[i].speed;
        if (char[i].x < 162) {
            char[i].x = 162;
            char[i].mvLeft = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
            }
        }
        if (char[i].x > 1684) {
            char[i].x = 1684;
            char[i].mvRight = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
            }
        }
        if (char[i].y < 112) {
            char[i].y = 112;
            char[i].mvUp = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
            }
        }
        if (char[i].y > 806) {
            char[i].y = 806;
            char[i].mvDown = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
            }
        }
      if(char[i].hp <= 0){
        char.splice(i, 1);
        charImage.splice(i, 1);
        if(i==0 && !myCharDie) myCharDie = true;
        for(var j=0;j<Monsters.length;j++){
          if(Monsters[j].target == i){
            Monsters[j].target = Math.floor(Math.random()*char.length);
          }
        }

        if(char.length < 0) gameover();
      }
    }
}

function charGotDamage(target, damage){
  if(target == 0 && char[0].shield){
    char[target].hp -= (boss.speed == 0)? damage * (1-0.07) * 0.97 * 0  * (100 - char[target].ADefend) / 100 : damage * 0.97 * 0 * (100 - char[target].ADefend) / 100;
    BossGotDamage(damage * 0.03);
    char[0].stack++;
  } else {
    char[target].hp -= (boss.speed == 0)? damage * (1-0.07) : damage;
  }
}

function charmv() {
    for (var i = 0; i < char.length; i++) {
        if (char[i].state_limit[char[i].state] == char[i].beh) char[i].beh = 0;
        else char[i].beh++;
    }
}

function gameover(){
  gameState = GAME_OVER;
}
