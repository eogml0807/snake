// space
let space = document.getElementById("space");
let head = document.getElementById("head");
let bodys = document.getElementsByClassName("body");
let item = document.getElementById("item");

// result
let result = document.getElementById("result");
let time = document.getElementById("time");
let score = document.getElementById("score");


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

let intervalCount = 0;
let itemCount = 0;