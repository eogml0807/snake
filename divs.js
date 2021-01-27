function getBodys() {
    for(var v = 0; v < bodys.length; v++) {
        bodyLocX[v] = bodys.item(v).offsetLeft;
        bodyLocY[v] = bodys.item(v).offsetTop;
    }
}

function setBodys() {
    for(var v = 0; v < bodys.length - 1; v++) {
        bodys.item(v + 1).style.display = "block";
        bodys.item(v + 1).style.left = bodyLocX[v] + "px";
        bodys.item(v + 1).style.top = bodyLocY[v] + "px";
    }
}

function setItem() {
    item.style.backgroundColor = "black";

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