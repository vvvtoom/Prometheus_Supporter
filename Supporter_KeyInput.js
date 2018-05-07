window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(e) {
    e.returnValue = false;
    switch (e.keyCode) {
        case 27:
            goLeft();
            break;
        case 37: // 왼쪽
            if (char[0].charging == false && !myCharDie) {
                char[0].state = 5;
                char[0].mvFlag = true;
                char[0].state_temp = 1;
                char[0].mvLeft = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 38: // 위
            if (char[0].charging == false && !myCharDie) {
                char[0].state = 6;
                char[0].mvFlag = true;
                char[0].state_temp = 2;
                char[0].mvUp = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 39: // 오른쪽
            if (char[0].charging == false && !myCharDie) {
                char[0].state = 7;
                char[0].mvFlag = true;
                char[0].state_temp = 3;
                char[0].mvRight = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 40: // 아래
            if (char[0].charging == false && !myCharDie) {
                char[0].state = 4;
                char[0].mvFlag = true;
                char[0].state_temp = 0;
                char[0].mvDown = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 32: // space
            if (char[0].attackFlag) {
            switch (char[0].state) {
                case 1:
                case 5:
                    PBulletArr.push({
                        x: char[0].x + 10,
                        y: char[0].y + 55,
                      width: 16,
                      height: 17,
                        goX: -1,
                        goY: 0,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
                case 0:
                case 4:
                    PBulletArr.push({
                        x: char[0].x + 48,
                        y: char[0].y + 120,
                      width: 16,
                      height: 17,
                        goX: 0,
                        goY: 1,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
                case 3:
                case 7:
                    PBulletArr.push({
                        x: char[0].x + 90,
                        y: char[0].y + 55,
                      width: 16,
                      height: 17,
                        goX: 1,
                        goY: 0,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
                case 2:
                case 6:
                    PBulletArr.push({
                        x: char[0].x + 48,
                        y: char[0].y + 20,
                      width: 16,
                      height: 17,
                        goX: 0,
                        goY: -1,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
            }
              PBulletArr[PBulletArr.length-1].damage = attackDamage();
              char[0].attackFlag = false;
              setTimeout(function() {
                  char[0].attackFlag = true;
              }, 1000 / char[0].ASpeed);
            }
            break;
        case 16: // 'shift' button
            if (!char[0].PCool) {
              effect.push(shield);
              char[0].PCool = shield.cooldown;
              char[0].shield = true;
              setTimeout(function(){char[0].shield = false;}, 300);
            }
            break;
        case 65: // 'a' button
            if (!char[0].ACool && !char[0].silence) {
              var count = 0;
              char[0].ACool = 5000;
              effect.push(holylight);
              for(var i=0;i<4;i++){
                if ((char[i].x > char[0].x - 200) && (char[i].x < char[0].x + 245) &&
            (char[i].y < char[0].y + 250) && (char[i].y > char[0].y - 200) && count < holylight_limit()) {
                  char[i].hp += char[i].fhp * holylight_up();
                  if(char[i].hp > char[i].fhp) char[i].hp = char[i].fhp;
                  count++;
                }
              }
            }
            break;
        case 68: // 'd' button
            if (!char[0].DCool && !char[0].silence && char[0].stack >= timeleap_use()) {
              char[0].stack -= timeleap_use();
              effect.push(timeleap_effect);
              timeleap();
              char[0].DCool += 5000;
            }
            break;
        case 70: // 'f' button
            if (!char[0].FCool && !char[0].silence) {
              blessoflight();
              effect.push(blessoflight_effect);
              char[0].FCool += 5000;
            }
            break;
        case 83: // 's' button
            if (!char[0].SCool && !char[0].silence) {
              temp = boss.speed;
              boss.speed = 0;
              char[0].SCool += 5000;
              effect.push(bind_hit);
              setTimeout(function(){
                remove_bind();
              },bind_duration() * 1000);
            }
            break;

    }
}

function onKeyUp(e) {
    switch (e.keyCode) {
        case 27:
            stop();
            break;
        case 37: // 왼쪽
            char[0].beh = 0;
            char[0].mvLeft = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
        case 38: // 위
            char[0].beh = 0;
            char[0].mvUp = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
        case 39: // 오른쪽
            char[0].beh = 0;
            char[0].mvRight = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
        case 40: // 아래
            char[0].beh = 0;
            char[0].mvDown = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
    }
    if (!char[0].mvUp && !char[0].mvLeft &&
        !char[0].mvRight && !char[0].mvDown) char[0].state = char[0].state_temp;
}
