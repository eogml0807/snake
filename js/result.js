// 결과 - 시간 설정
function setTime() {
    var text = (intervalCount*0.01).toFixed(2) + " 초";
    time.innerText = text;
    intervalCount++;
}

// 결과 - 점수 설정
function setScore() {
    itemCount++;
    if(itemCount % 10 == 0 && snakeDelay > 100) {
        snakeDelay -= 20;
        clearInterval(intervalSnake);
        intervalSnake = setInterval(moveSnake, snakeDelay);
    }
    var text = `${itemCount*100} 점`;
    score.innerText = text;
}