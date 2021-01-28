// 게임 공간
let space = document.getElementById("space");
let head = document.getElementById("head");
let bodys = document.getElementsByClassName("body");
let item = document.getElementById("item");

// 게임 결과
let result = document.getElementById("result");
let time = document.getElementById("time");
let score = document.getElementById("score");

// 인터벌 관련
let isFirst = true;
let intervalSnake;
let intervalTime;
let snakeDelay = 200;
let intervalCount = 0;
let itemCount = 0;

// 게임 세팅 관련
let width;
let height;
let spaceX;
let spaceY;
let moveLeft = 0;
let moveTop = 0;
let bodyLocX = new Array();
let bodyLocY = new Array();