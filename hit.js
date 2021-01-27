function hitWall(headLeft, headTop) {
    if(headLeft < 0 || headLeft >= space.offsetWidth) {
        return true;
    }
    if(headTop < 0 || headTop >= space.offsetHeight) {
        return true;
    }
    return false;
}

function hitBody(headLeft, headTop) {
    for(var v = 1; v < bodys.length; v++) {
        let body = bodys.item(v);
        if(headLeft == body.offsetLeft && headTop == body.offsetTop) {
            return true;
        }
    }
    return false;
}

function hitItem() {
    if(head.offsetLeft == item.offsetLeft && head.offsetTop == item.offsetTop) {
        setScore();
        let div = document.createElement("div");
        div.setAttribute("class", "body");
        div.style.display = "none";
        div.style.top = bodyLocY[bodys.length-1];
        div.style.left = bodyLocX[bodys.length-1];
        space.appendChild(div);
        setItem();
    }
}