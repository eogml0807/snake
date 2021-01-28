// keyup 이벤트 함수
function run(event) {
    let keyCode = event.keyCode;
    if(keyCode >= 37 && keyCode <= 40) {
        if(isFirst) {
            moveLocation(keyCode);
            start();
            isFirst = false;
        } else {
            moveLocation(keyCode);
        }
    } else if(keyCode == 27) {
        stop();
    } else if(keyCode == 82) {
        stop();
        setGame();
    }
}

// 게임 시작
function start() {
    setItem();
    intervalSnake = setInterval(moveSnake, snakeDelay);
    intervalTime = setInterval(setTime, 10);
}

// 게임 중지
function stop() {
    clearInterval(intervalTime);
    clearInterval(intervalSnake);
}

// 뱀 이동
function moveSnake() {
    getBodys();
    var headLeft = head.offsetLeft + moveLeft;
    var headTop = head.offsetTop + moveTop;
    if(hitWall(headLeft, headTop) || hitBody(headLeft, headTop)) {
        stop();
    } else {
        head.style.left = headLeft + "px";
        head.style.top = headTop + "px";
        setBodys();
        hitItem();
    }
}

// 뱀 이동 방향 설정
function moveLocation(keyCode) {
    switch(keyCode) {
        case 37:
            if(moveLeft != 50) {
                moveLeft = -50;
                moveTop = 0;
            }
            break;
        case 39:
            if(moveLeft != -50) {
                moveLeft = 50;
                moveTop = 0;
            }
            break;
        case 38:
            if(moveTop != 50) {
                moveTop = -50;
                moveLeft = 0;
            }
            break;
        case 40:
            if(moveTop != -50) {
                moveTop = 50;
                moveLeft = 0;
            }
            break;
    }
}