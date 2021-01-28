// 현재 몸통 위치 저장
function getBodys() {
    for(var v = 0; v < bodys.length; v++) {
        bodyLocX[v] = bodys.item(v).offsetLeft;
        bodyLocY[v] = bodys.item(v).offsetTop;
    }
}

// 한 칸씩 앞으로 이동
function setBodys() {
    for(var v = 0; v < bodys.length - 1; v++) {
        let color = (parseInt(v/17))%3;
        switch(color) {
            case 0:
                bodys.item(v + 1).style.backgroundColor = `rgb(${(v%17)*15}, ${255 - (v%17)*15}, 255)`;
                break;
            case 1:
                bodys.item(v + 1).style.backgroundColor = `rgb(255, ${(v%17)*15}, ${255 - (v%17)*15})`;
                break;
            case 2:
                bodys.item(v + 1).style.backgroundColor = `rgb(${255 - (v%17)*15}, 255, ${(v%17)*15})`;
                break;
        }
        bodys.item(v + 1).style.display = "block";
        bodys.item(v + 1).style.left = bodyLocX[v] + "px";
        bodys.item(v + 1).style.top = bodyLocY[v] + "px";
    }
}

// 아이템 위치 설정
function setItem() {
    item.style.backgroundColor = "black";
    item.style.display = "block";

    while(true) {
        let b = true;
        let randX = Math.round((Math.random()*(space.offsetWidth-50)/50)) * 50;
        let randY = Math.round((Math.random()*(space.offsetHeight-50)/50)) * 50;
        
        for(var v = 0; v < bodys.length; v++) {
            let body = bodys.item(v);
            if(body.offsetLeft == randX && body.offsetTop == randY) {
                b = false;
                break;
            }
        }
        
        if(b) {
            item.style.left = `${randX}px`;
            item.style.top = `${randY}px`;
            break;
        }
    }

}