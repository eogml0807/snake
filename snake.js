setGame();
window.addEventListener("keyup", run);
window.addEventListener("resize", setGame);

// when browser size changed
function setGame() {
    // space setting
    width = window.innerWidth;
    height = window.innerHeight;
    spaceX = Math.round(width * 0.7/50) * 50;
    spaceY = Math.round(height * 0.7/50) * 50;
    space.style.width = `${spaceX}px`;
    space.style.height = `${spaceY}px`;
    space.style.left = (Math.round(width * 0.15/50) * 50) + "px";
    space.style.top = (Math.round(height * 0.05/50) * 50) + "px";
    // head setting
    if(space.offsetWidth % 100 != 0) {
        head.style.left = (space.offsetWidth/2 - 25) + "px";
    } else {
        head.style.left = (space.offsetWidth/2 - 50) + "px";
    }
    if(space.offsetHeight % 100 != 0) {
        head.style.top = (space.offsetHeight/2 - 25) + "px";
    } else {
        head.style.top = (space.offsetHeight/2 - 50) + "px";
    }
    // body setting
    for(var v = 1; v < 5; v++) {
        var body = document.createElement("div");
        body.setAttribute("class", "body");
        body.style.left = head.offsetLeft + "px";
        body.style.top = `${head.offsetTop}px`;
        space.appendChild(body);
    }

    // result setting
    result.style.width = space.offsetWidth + "px";
    result.style.height = (space.offsetHeight * 0.2) + "px";
    result.style.left = space.offsetLeft + "px";
    result.style.top = (space.offsetTop + space.offsetHeight) + "px";
    // time setting
    time.style.width = (result.offsetWidth/2) + "px";
    time.style.height = result.offsetHeight + "px";
    time.style.left = "0px";
    time.style.top = "0px";
    // score setting
    score.style.width = (result.offsetWidth/2) + "px";
    score.style.height = result.offsetHeight + "px";
    score.style.left = result.offsetWidth/2 + "px";
    score.style.top = "0px";
}

function run(event) {
    let keyCode = event.keyCode;
    if(keyCode >= 37 && keyCode <= 40) {
        if(isFirst) {
            move(keyCode);
            start();
            isFirst = false;
        } else {
            move(keyCode);
        }
    } else if(keyCode == 27) {
        stop();
    }
}

function start() {
    setItem();
    interval = setInterval(inInterval, 200);
}

function inInterval() {
    setTime();
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

function stop() {
    clearInterval(interval);
}

function move(keyCode) {
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