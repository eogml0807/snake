function setTime() {
    var text = (intervalCount*0.01).toFixed(2) + " 초";
    time.innerText = text;
    intervalCount++;
}

function setScore() {
    itemCount++;
    var text = `${itemCount*100} 점`;
    score.innerText = text;
}