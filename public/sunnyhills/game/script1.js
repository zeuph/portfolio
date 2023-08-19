const canvas = document.getElementById("sandbox");
const smallScore = document.getElementById("smallScore");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const img = document.getElementById("chair");
// const fruits = new Image();


function Food(col, row, fruits) {
  let cols = 7;
  let rows = 6;
  this.name = name;
  this.x = 0;
  this.y = 0;

  let spriteWidth = fruits.width / cols;
  let spriteHeight = fruits.height / rows;

  this.col = col;
  this.row = row;

  let srcX = this.col * spriteWidth;
  let srcY = this.row * spriteHeight;

  this.draw = function (x, y) {
    this.x = x;
    this.y = y;
      console.log(fruits,
        srcX,
        srcY,
        spriteWidth,
        spriteHeight,
        this.x,
        this.y,
        spriteWidth,
        spriteHeight);

    // ctx.drawImage(
    //   fruits,
    //   srcX,
    //   srcY,
    //   spriteWidth,
    //   spriteHeight,
    //   this.x,
    //   this.y,
    //   spriteWidth,
    //   spriteHeight
    // );
    ctx.drawImage(
      fruits,srcX,srcY,spriteWidth,spriteHeight,this.x ,this.y,spriteWidth,spriteHeight
    );
  };
}
const images = ["img/fruits.png"];

function loadImages() {

  let loaded = 0;

  function onLoad() {
    loaded++;
    if (loaded == images.length){
      console.log("loaded");
      init();
    }
  }
  console.log("loading..");
  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.addEventListener("load", onLoad);
    img.src = images[i];
    console.log(img);
    imgArr.push(img);
  }
}

function init() {
  fruitImgArr = [new Food(6,2, imgArr[0])]
  Update();
}


let imgArr = [];
let fruitImgArr = [];


function Update() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < fruitImgArr.length; i++) {
    fruitImgArr[i].draw(100, 100);
  }
  //new Food(6,2,imgArr[0]).draw(100,100);

  requestAnimationFrame(Update);
}

