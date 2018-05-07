window.addEventListener("load", function() {
    setInterval(bulletMove, 40)
}, false);

window.addEventListener("load", function(){
    setInterval(bulletTime, 100);
}, false);

var effect = new Array();
var effectNow = new Array();
var effectLimit = new Array();

var PBulletArr = new Array();
var BBulletArr = new Array();

var PBullet = new Image;
PBullet.src = "./res/charBullet.png";

function bulletMove() {
    for (var i = 0; i < PBulletArr.length; i++) {
        PBulletArr[i].x += PBulletArr[i].goX * PBulletArr[i].speed;
        PBulletArr[i].y += PBulletArr[i].goY * PBulletArr[i].speed;
        if ((boss.x + 90 > PBulletArr[i].x) && (boss.x + 20 < PBulletArr[i].x + PBulletArr[i].width) &&
            (boss.y + 20 < PBulletArr[i].y + PBulletArr[i].height) && (boss.y + 108 > PBulletArr[i].y)) {
            BossGotDamage(PBulletArr[i].damage);
            if (PBulletArr[i].name == "water") {
                effect.push(water_hit);
            }
            if (PBulletArr[i].name == "tsunami") {
                effect.push(tsunami_hit);
            }
            if (PBulletArr[i].name == "wind"){
                if(boss.windhit == false){
                  wind_hit.way = wind_effect.way;
                  effect.push(wind_hit);
                  boss.windhit = true;
                }
            }else {
              PBulletArr.splice(i, 1);
            }
        } else if (PBulletArr[i].x > 1920 || PBulletArr[i].x < 0 ||
              PBulletArr[i].y > 1080 || PBulletArr[i].y < 0) {
              PBulletArr.splice(i, 1);
        }
      for(var j=0;j<Monsters.length;j++){
        if ((Monsters[j].x + Monsters[j].width > PBulletArr[i].x) && (Monsters[j].x < PBulletArr[i].x + PBulletArr[i].width) &&
            (Monsters[j].y < PBulletArr[i].y + PBulletArr[i].height) && (Monsters[j].y + Monsters[j].height > PBulletArr[i].y)) {
            if (PBulletArr[i].name == "wind"){
                if(Monsters[j].windhit == false){
                  Monsters[j].windhit = true;
                  Monsters[j]['hp'] -= PBulletArr[i].damage;
                }
            }else {
              Monsters[j]['hp'] -= PBulletArr[i].damage;
              PBulletArr.splice(i, 1);
            }
      }
    }
    }
  for(i=0;i<BBulletArr.length;i++){
    BBulletArr[i].x += BBulletArr[i].goX * BBulletArr[i].speed;
    BBulletArr[i].y += BBulletArr[i].goY * BBulletArr[i].speed;
    if(BBulletArr[i].name == "bossA"){
      for(var j=0;j<char.length;j++){
        if((char[j].x + 90 > BBulletArr[i].x) && (char[j].x + 10 < BBulletArr[i].x + BBulletArr[i].width) &&
            (char[j].y + 10 < BBulletArr[i].y + BBulletArr[i].height) && (char[j].y + 110 > BBulletArr[i].y) && !char[j].dashing && !char[j].rushing){
              charGotDamage(j, BBulletArr[i].damage);
          char[j].blackout = true;
          var a = j;
          setTimeout(function(){char[a].blackout = false;}, (boss.rage)?7000 : 5000);
          BBulletArr.splice(i, 1);
          if(char[j].charging && j==0){
            char[0].charging = false;
            char[0].silence = false;
            char[0].charge = 0;
          }
        }
      }
    } if(BBulletArr[i].name == "boss"){
          for(var j=0;j<char.length;j++){
            if((char[j].x + 90 > BBulletArr[i].x) && (char[j].x + 10 < BBulletArr[i].x + BBulletArr[i].width) &&
            (char[j].y + 10 < BBulletArr[i].y + BBulletArr[i].height) && (char[j].y + 110 > BBulletArr[i].y) && !char[j].dashing && !char[j].rushing){
              charGotDamage(j, BBulletArr[i].damage);
              BBulletArr.splice(i, 1);
              if(char[j].charging && j==0){
                char[0].charging = false;
                char[0].silence = false;
                char[0].charge = 0;
              }
            }
          }
      } if(BBulletArr[i].name == "smoke_v" || BBulletArr[i].name == "smoke_h"){
          for(var j=0;j<char.length;j++){
            if((char[j].x + 90 > BBulletArr[i].x) && (char[j].x + 10 < BBulletArr[i].x + BBulletArr[i].width) &&
            (char[j].y + 10 < BBulletArr[i].y + BBulletArr[i].height) && (char[j].y + 110 > BBulletArr[i].y) && !char[j].dashing && !char[j].smoke && !char[j].rushing){
              char[j].smoke = true;
              var a = j;
              setTimeout(function(){char[a].blackout = false;}, (boss.rage)?7000 : 5000);
              charGotDamage(j, BBulletArr[i].damage);
              if(char[j].charging && j==0){
                char[0].charging = false;
                char[0].silence = false;
                char[0].charge = 0;
              }
            }
          }
      }
    else if (BBulletArr[i].x > 1920 || BBulletArr[i].x < 0 ||
              BBulletArr[i].y > 1080 || BBulletArr[i].y < 0) {
              BBulletArr.splice(i, 1);
    }
  }
}

function bulletTime(){
    for(var i=0; i<PBulletArr.length;i++){
      PBulletArr[i].lifetime--;
      if(PBulletArr[i].lifetime <= 0) PBulletArr.splice(i, 1);
    }
}
