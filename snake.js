let interval;
let isFirst = true;
let head = document.querySelector("#head");

function run(event) {
    let keyCode = event.keyCode;
    if(keyCode >= 37 && keyCode <= 40) {
        if(isFirst) {
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
    interval = setInterval(function() {
        console.log("반복 실행");
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function move(keyCode) {

}

function hitWall() {

}

function hitBody() {
    
}

window.addEventListener("keyup", run);