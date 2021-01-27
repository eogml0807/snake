function setTime() {
    var text = (intervalCount*0.2).toFixed(1) + " 초";
    time.innerText = text;
    intervalCount++;
}

function setScore() {
    itemCount++;
    var text = `${itemCount*100} 점`;
    score.innerText = text;
}