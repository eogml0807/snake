let head = document.getElementById("head");
let space = document.getElementById("space");
let bodys = document.getElementsByClassName("body");
let item = document.getElementById("item");
console.log(bodys);

let interval;
let width;
let height;
let spaceX;
let spaceY;
let moveLeft = 0;
let moveTop = 0;
let isFirst = true;
let bodyLocX = new Array();
let bodyLocY = new Array();

setSpace();

function setSpace() {
    width = window.innerWidth;
    height = window.innerHeight;

    spaceX = Math.round(width * 0.7/50) * 50;
    spaceY = Math.round(height * 0.7/50) * 50;
    console.log(`spaceXY ${spaceX}, ${spaceY}`);

    space.style.width = `${spaceX}px`;
    space.style.height = `${spaceY}px`;
    space.style.left = (Math.round(width * 0.15/50) * 50) + "px";
    space.style.top = (Math.round(height * 0.15/50) * 50) + "px";

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

    for(var v = 1; v < bodys.length; v++) {
        var body = bodys.item(v);
        body.style.left = (head.offsetLeft - 50*v) + "px";
        body.style.top = `${head.offsetTop}px`;
    }

    setItem();
}

function run(event) {
    let keyCode = event.keyCode;
    if(keyCode >= 37 && keyCode <= 40) {
        if(isFirst) {
            if(keyCode != 37) {
                move(keyCode);
                start();
                isFirst = false;
            }
        } else {
            move(keyCode);
        }
    } else if(keyCode == 27) {
        stop();
    }
}

function start() {
    interval = setInterval(inInterval, 200);
}

function inInterval() {
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

window.addEventListener("keyup", run);
window.addEventListener("resize", setSpace);