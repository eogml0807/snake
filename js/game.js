setGame();
window.addEventListener("keyup", run);
window.addEventListener("resize", setGame);

// 게임 초기화 및 게임 설정
function setGame() {
    clearGame();
    // 게임 공간 세팅
    width = window.innerWidth;
    height = window.innerHeight;
    spaceX = Math.round(width * 0.7/50) * 50;
    spaceY = Math.round(height * 0.7/50) * 50;
    space.style.width = `${spaceX}px`;
    space.style.height = `${spaceY}px`;
    space.style.left = (Math.round(width * 0.15/50) * 50) + "px";
    space.style.top = (Math.round(height * 0.05/50) * 50) + "px";
    // 머리 세팅
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
    // 몸통 세팅
    for(var v = 1; v < 5; v++) {
        var body = document.createElement("div");
        body.setAttribute("class", "body");
        body.style.left = head.offsetLeft + "px";
        body.style.top = `${head.offsetTop}px`;
        space.appendChild(body);
    }

    // 게임 결과 세팅
    result.style.width = space.offsetWidth + "px";
    result.style.height = (space.offsetHeight * 0.2) + "px";
    result.style.left = space.offsetLeft + "px";
    result.style.top = (space.offsetTop + space.offsetHeight) + "px";
    // 결과 - 시간 세팅
    time.style.width = (result.offsetWidth/2) + "px";
    time.style.height = result.offsetHeight + "px";
    time.style.left = "0px";
    time.style.top = "0px";
    // 결과 - 점수 세팅
    score.style.width = (result.offsetWidth/2) + "px";
    score.style.height = result.offsetHeight + "px";
    score.style.left = result.offsetWidth/2 + "px";
    score.style.top = "0px";
}

// 게임 초기화
function clearGame() {
    isFirst = true;

    moveLeft = 0;
    moveTop = 0;
    while(bodys.length > 1) {
        bodys.item(1).remove();
    }
    item.style.display = "none";

    time.innerText = "시간";
    intervalCount = 0;
    score.innerText = "스코어";
    itemCount = 0;
}