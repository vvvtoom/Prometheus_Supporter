window.addEventListener("load", function() {
    setInterval(effectMv, 70)
}, false);

window.addEventListener("load", function() {
    setInterval(coolTimer, 100)
}, false);

var ASkill = new Image;
ASkill.src = "./res/SASkill.png";
var SSkill = new Image;
SSkill.src = "./res/SSSkill.png";
var DSkill = new Image;
DSkill.src = "./res/SDSkill.png";
var FSkill = new Image;
FSkill.src = "./res/SFSkill.png";

var temp;

function coolTimer() {
    if(char.length > 0){
    if (char[0].PCool > 0) {
        char[0].PCool -= 100;
        if (char[0].PCool < 0) char[0].PCool = 0;
    }
    if (char[0].ACool > 0) {
        char[0].ACool -= 100;
        if (char[0].ACool < 0) char[0].ACool = 0;
    }
    if (char[0].SCool > 0) {
        char[0].SCool -= 100;
        if (char[0].SCool < 0) char[0].SCool = 0;
    }
    if (char[0].DCool > 0) {
        char[0].DCool -= 100;
        if (char[0].DCool < 0) char[0].DCool = 0;
    }
    if (char[0].FCool > 0) {
        char[0].FCool -= 100;
        if (char[0].FCool < 0) char[0].FCool = 0;
    }
    }
}

var effect = new Array();
var chargeArr = new Array();

var wHeal = {
    image: null,
    width: 59,
    height: 119,
    oneX: -8,
    oneY: -65,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 12,
    state: 0,
    way: 1,
    owner: 1,
    duration: 0,
    cooldown: 1300
};

function heal_require() {
    switch (char[1].SLevel) {
        case 1:
        case 2:
            return 4;
        case 3:
        case 4:
            return 3;
        case 5:
        case 6:
            return 2;
        case 7:
            return 1;
    }
}

function heal_use() {
    switch (char[1].SLevel) {
        case 1:
            return 4;
        case 2:
        case 3:
            return 3;
        case 4:
        case 5:
            return 2;
        case 6:
        case 7:
            return 1;
    }
}

var gX = 0;
var gY = 0;

wHeal.image = new Image;
wHeal.image.src = "./res/heal.png";

var rush = {
    width: 30,
    height: 5,
    charX: 5,
    charY: 10,
    owner: 1,
    cooldown: 0,
    name: "rush"
};

var water = {
    width: 30,
    height: 5,
    charX: 5,
    charY: 10,
    owner: 2,
    cooldown: 0,
    name: "water"
};

var blizard_charge = {
    width: 30,
    height: 5,
    charX: 5,
    charY: 10,
    owner: 2,
    cooldown: 2,
    name: "blizard"
};

var tsunami = {
    width: 30,
    height: 5,
    charX: 5,
    charY: 10,
    owner: 2,
    cooldown: 0,
    name: "water"
};

var wind = {
    width: 30,
    height: 5,
    charX: 5,
    charY: 10,
    owner: 3,
    cooldown: 0,
    name: "wind"
};

var waterBullet = new Image;
waterBullet.src = "./res/watercanon_ball.png";

var tsunamiBullet = new Image;
tsunamiBullet.src = "./res/tsunamiBullet.png";

var watercharge;
var rushcharge;
var tsunamicharge;
var windcharge;
var blizardcharge;

var blizard = {
    image: null,
    width: 218,
    height: 210,
    oneX: 0,
    oneY: 0,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 11,
    state: 0,
    way: 1,
    owner: 2,
    duration: 0,
    cooldown: 0
}

blizard.image = new Image;
blizard.image.src = "./res/blizard.png";

function water_cool() {
    switch (char[2].ALevel) {
        case 1:
            return 4;
        case 2:
        case 3:
            return 3;
        case 4:
        case 5:
            return 2;
        case 6:
        case 7:
            return 1;
    }
}

var water_hit = {
    image: null,
    width: 146,
    height: 125,
    oneX: -8,
    oneY: 0,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 7,
    state: 0,
    way: 1,
    owner: "boss",
    duration: 0,
    cooldown: 0
};

water_hit.image = new Image;
water_hit.image.src = "./res/watercanon_effect.png";

var tsunami_hit = {
    image: null,
    width: 82,
    height: 76,
    oneX: 20,
    oneY: 20,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 5,
    state: 0,
    way: 1,
    owner: "boss",
    duration: 0,
    cooldown: 0
};

tsunami_hit.image = new Image;
tsunami_hit.image.src = "./res/tsunami_hit.png";

function tsunami_damage() {
    switch (char[2].DLevel) {
        case 1:
            return 3.0;
        case 2:
            return 5.0;
        case 3:
            return 7.0;
        case 4:
            return 9.0;
        case 5:
            return 11.0;
        case 6:
            return 13.0;
        case 7:
            return 15.0;
    }
}

function tsunami_stack_damage() {
    switch (char[2].DLevel) {
        case 3:
            return 10.0;
        case 4:
            return 20.0;
        case 5:
            return 30.0;
        case 6:
            return 40.0;
        case 7:
            return 60.0;
    }
}

function tsunami_cool() {
    switch (char[2].DLevel) {
        case 1:
            return 4;
        case 2:
        case 3:
            return 3;
        case 4:
        case 5:
            return 2;
        case 6:
        case 7:
            return 1;
    }
}

var magic_hit = {
    image: null,
    width: 163,
    height: 157,
    oneX: -20,
    oneY: -10,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 5,
    state: 0,
    way: 1,
    owner: "boss",
    duration: 0,
    cooldown: 0
};

magic_hit.image = new Image;
magic_hit.image.src = "./res/magic_hit.png";

function magic_damage() {
    switch (char[2].FLevel) {
        case 1:
            return 2.0;
        case 2:
            return 2.5;
        case 3:
            return 5.0;
        case 4:
            return 5.5;
        case 5:
            return 6.0;
        case 6:
            return 6.5;
        case 7:
            return 10.0;
    }
}

function wind_damage() {
    switch (char[3].SLevel) {
        case 1:
            return 2.0;
        case 2:
            return 3.0;
        case 3:
            return 7.0;
        case 4:
            return 8.0;
        case 5:
            return 10.0;
        case 6:
            return 15.0;
        case 7:
            return 25.0;
    }
}

var wind_effect = {
    image: null,
    width: 104,
    height: 117,
    oneX: -50,
    oneY: -30,
    twoX: -40,
    twoY: 0,
    threeX: 0,
    threeY: -30,
    fourX: -40,
    fourY: -50,
    limit: 13,
    state: 0,
    way: 1,
    owner: 3,
    duration: 0,
    cooldown: 0
};

wind_effect.image = new Image;
wind_effect.image.src = "./res/windshot.png";

var wind_hit = {
    image: null,
    width: 91,
    height: 110,
    oneX: 30,
    oneY: 10,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 10,
    fourX: 0,
    fourY: 30,
    limit: 6,
    state: 0,
    way: 1,
    owner: "boss",
    duration: 0,
    cooldown: 0
};

wind_hit.image = new Image;

var windBullet = new Image;

var dash = {
    image: null,
    width: 91,
    height: 110,
    oneX: -20,
    oneY: 0,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: -20,
    limit: 4,
    state: 0,
    way: 1,
    owner: 3,
    duration: 0,
    cooldown: 0
};

dash.image = new Image;

function dash_up(){
  switch(char[3].DLevel){
    case 1:
        return 2;
    case 2:
    case 3:
    case 4:
    case 5:
        return 4;
    case 6:
    case 7:
        return 6;
  }
}

function dash_req(){
  switch(char[3].DLevel){
    case 1:
        return 11;
    case 2:
        return 9;
    case 3:
        return 8;
    case 4:
        return 7;
    case 5:
        return 6;
    case 6:
        return 3;
    case 7:
        return 2;
  }
}

var aHeal = {
    image: null,
    width: 59,
    height: 119,
    oneX: -8,
    oneY: -65,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 12,
    state: 0,
    way: 1,
    owner: 3,
    duration: 0,
    cooldown: 1300
};

function aHeal_require() {
    switch (char[3].FLevel) {
        case 1:
        case 2:
            return 4;
        case 3:
        case 4:
            return 3;
        case 5:
        case 6:
            return 2;
        case 7:
            return 1;
    }
}

aHeal.image = new Image;
aHeal.image.src = "./res/heal.png";

function aHeal_use() {
    switch (char[3].FLevel) {
        case 1:
            return 4;
        case 2:
        case 3:
            return 3;
        case 4:
        case 5:
            return 2;
        case 6:
        case 7:
            return 1;
    }
}

var holylight = {
    image: null,
    width: 74,
    height: 137,
    oneX: 12,
    oneY: 0,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 7,
    state: 0,
    way: 1,
    owner: 0,
    duration: 0,
    cooldown: 0
};

holylight.image = new Image;
holylight.image.src = "./res/holylight.png";

function holylight_limit() {
    switch (char[0].ALevel) {
        case 1:
        case 2:
            return 2;
        case 3:
        case 4:
        case 5:
        case 6:
            return 3;
        case 7:
            return 4;
    }
}

function holylight_up() {
    switch (char[0].ALevel) {
        case 1:
            return 0.3;
        case 2:
            return 0.35;
        case 3:
            return 0.4;
        case 4:
            return 0.45;
        case 5:
            return 0.5;
        case 6:
            return 0.55;
        case 7:
            return 0.7;
    }
}

function remove_rush() {
    for (var i = 0; i < chargeArr.length; i++) {
        if (chargeArr[i].name == "rush") chargeArr.splice(i, 1);
    }
}

function remove_water() {
    for (var i = 0; i < chargeArr.length; i++) {
        if (chargeArr[i].name == "water") chargeArr.splice(i, 1);
    }
}

function remove_tsunami() {
    for (var i = 0; i < chargeArr.length; i++) {
        if (chargeArr[i].name == "tsunami") chargeArr.splice(i, 1);
    }
}

function remove_blizard() {
    for (var i = 0; i < chargeArr.length; i++) {
        if (chargeArr[i].name == "blizard") chargeArr.splice(i, 1);
    }
}

function remove_wind() {
    for (var i = 0; i < chargeArr.length; i++) {
        if (chargeArr[i].name == "wind") chargeArr.splice(i, 1);
    }
}

function remove_bind() {
  for(var i=0;i<effect.length;i++){
    if(effect[i].duration == 5){
       effect.splice(i,1);
       boss.speed = temp;
       break;
    }
  }
}

var chargeImage = new Image;
chargeImage.src = "./res/charge.png";

var gigantize;
var minimize;

function gigan() {
    switch (char[1].DLevel) {
        case 1:
            return 4;
        case 2:
            return 5;
        case 3:
            return 7;
        case 4:
            return 8;
        case 5:
            return 9;
        case 6:
            return 10;
        case 7:
            return 15;
    }
}

function gigan_cool() {
    switch (char[1].DLevel) {
        case 1:
            return 80;
        case 2:
            return 75;
        case 3:
            return 60;
        case 4:
            return 55;
        case 5:
            return 50;
        case 6:
            return 45;
        case 7:
            return 40;
    }
}

function rush_damage() {
    switch (char[1].DLevel) {
        case 1:
            return 2.0;
        case 2:
            return 2.2;
        case 3:
            return 3.0;
        case 4:
            return 3.2;
        case 5:
            return 3.4;
        case 6:
            return 3.6;
        case 7:
            return 5.0;
    }
}

function rush_cool() {
    switch (char[1].DLevel) {
        case 1:
            return 80;
        case 2:
            return 75;
        case 3:
            return 60;
        case 4:
            return 55;
        case 5:
            return 50;
        case 6:
            return 45;
        case 7:
            return 40;
    }
}

function water_damage() {
    switch (char[2].ALevel) {
        case 1:
            return 2.0;
        case 2:
            return 2.4;
        case 3:
            return 3.0;
        case 4:
            return 3.4;
        case 5:
            return 3.8;
        case 6:
            return 4.2;
        case 7:
            return 5.0;
    }
}

function ice_damage() {
    switch (char[2].SLevel) {
        case 1:
            return 2.0;
        case 2:
            return 3.0;
        case 3:
            return 6.0;
        case 4:
            return 7.0;
        case 5:
            return 8.0;
        case 6:
            return 9.0;
        case 7:
            return 15.0;
    }
}

function arrow_damage() {
    switch (char[3].ALevel) {
        case 1:
            return 1.0;
        case 2:
            return 1.3;
        case 3:
            return 2.5;
        case 4:
            return 2.7;
        case 5:
            return 3.0;
        case 6:
            return 3.3;
        case 7:
            return 5.0;
    }
}

var shield = {
    image: null,
    width: 180,
    height: 148,
    oneX: -40,
    oneY: -10,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 4,
    state: 0,
    way: 1,
    owner: 0,
    duration: 0,
    cooldown: 1000
};

shield.image = new Image;
shield.image.src = "./res/shield.png";

var bind_hit = {
    image: null,
    width: 63,
    height: 65,
    oneX: 40,
    oneY: 100,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 5,
    state: 0,
    way: 1,
    owner: "boss",
    duration: 5,
    cooldown: 0
};

bind_hit.image = new Image;
bind_hit.image.src = "./res/binding.png";

function bind_duration() {
    switch (char[0].SLevel) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
        case 4:
            return 3;
        case 5:
        case 6:
            return 4;
        case 7:
            return 7;
    }
}

var timeleap_effect = {
    image: null,
    width: 89,
    height: 73,
    oneX: 5,
    oneY: -50,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 16,
    state: 0,
    way: 1,
    owner: 0,
    duration: 0,
    cooldown: 0
};

timeleap_effect.image = new Image;
timeleap_effect.image.src = "./res/timeleap.png";

function timeleap_use() {
    switch (char[0].DLevel) {
        case 1:
            return 5;
        case 2:
            return 4;
        case 3:
        case 4:
        case 5:
            return 3;
        case 6:
            return 2;
        case 7:
            return 1;
    }
}

function timeleap_damage(){
  switch(char[0].DLevel){
    case 1:
    case 2:
        return 0.5;
    case 3:
        return 1.5;
    case 4:
        return 2.0;
    case 5:
    case 6:
        return 2.5;
    case 7:
        return 3.0;
  }
}

function timeleap(){
  char[0].ACool -= timeleap_damage() * 1000;
  char[0].SCool -= timeleap_damage() * 1000;
  char[0].DCool -= timeleap_damage() * 1000;
  char[0].FCool -= timeleap_damage() * 1000;
  if (char[0].ACool < 0) char[0].ACool = 0;
  if (char[0].SCool < 0) char[0].SCool = 0;
  if (char[0].DCool < 0) char[0].DCool = 0;
  if (char[0].FCool < 0) char[0].FCool = 0;
}

var blessoflight_effect = {
    image: null,
    width: 158,
      height: 216,
      oneX: -25,
      oneY: -60,
    twoX: 0,
    twoY: 0,
    threeX: 0,
    threeY: 0,
    fourX: 0,
    fourY: 0,
    limit: 15,
    state: 0,
    way: 1,
    owner: 0,
    duration: 0,
    cooldown: 0
};

blessoflight_effect.image = new Image;
blessoflight_effect.image.src = "./res/blessoflight.png";

function blessoflight(){
  var critical = 0;
  var critDamage = 0.0;
  switch(char[0].FLevel){
    case 1:
      critical = 5;
      critDamage = 1.5;
      break;
    case 2:
      critical = 7;
      critDamage = 1.6;
      break;
    case 3:
      critical = 15;
      critDamage = 2.0;
      break;
    case 4:
      critical = 18;
      critDamage = 2.2;
      break;
    case 5:
      critical = 20;
      critDamage = 2.4;
      break;
    case 6:
      critical = 25;
      critDamage = 2.6;
      break;
    case 7:
      critical = 50;
      critDamage = 3.0;
      break;
  }
  char[0].critical += critical;
  char[0].critDamage *= critDamage;
  setTimeout(function(){
    char[0].critical -= critical;
    char[0].critDamage /= critDamage;
  },blessoflight_duration * 100);
}

function blessoflight_duration(){
  switch(char[0].FLevel){
    case 1:
    case 2:
        return 3.0;
    case 3:
    case 4:
    case 5:
        return 4.0;
    case 6:
        return 5.0;
    case 7:
        return 7.0;
  }
}

var arrowInterval;

function attackDamage() {
  var randNum = Math.floor(Math.random()%100+1);
  if(randNum > char[0].critical){
    return Math.floor(Math.random() * (char[0].ADamage * 1.2 - char[0].ADamage * 0.8)) + char[0].ADamage * 0.8;
  }
  else{
    return char[0].critDamage * (Math.floor(Math.random() * (char[0].ADamage * 1.2 - char[0].ADamage * 0.8)) + char[0].ADamage * 0.8);
  }
}

var swing_image = new Image;
swing_image.src = "./res/swing.png";

function effectMv() {
    for (var i = 0; i < effect.length; i++) {
        if (effect[i].state < effect[i].limit)
            effect[i].state++;
        else if (effect[i].state == effect[i].limit && effect[i].duration == 0) {
            effect[i].state = 0;
            effect.splice(i, 1);
        }
        else if (effect[i].state == effect[i].limit){
          effect[i].state = 0;
        }
    }
}
