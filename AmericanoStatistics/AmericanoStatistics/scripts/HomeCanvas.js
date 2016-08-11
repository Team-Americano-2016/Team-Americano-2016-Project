var myCanvas = document.querySelector('#myCanvas');
var context = myCanvas.getContext('2d');
var width=myCanvas.width;
var height=myCanvas.height;
var radius = 20;
var x = radius+1;
var y = 0;
var dx = 0;
var dy =2;

var image;
image = new Image();
image.src = 'scripts/images/dollar.png';
var dollars=[];
function makeDollar() {
    var dollar = {
        'x': Math.random() * (width - radius) + radius,
        'y': y,
        'dx': dx,
        'dy': dy,
        'r': radius,
        'img': image
    };
    dollars.push(dollar);
}

window.setInterval('makeDollar()',300);

/*myCanvasContainer.addEventListener('click', function (ev) {
    var newDollarX = ev.clientX;
    var newDollarY = 41;
    var img = new Image();
    img.src = 'scripts/images/dollar.png';
    var newDollar = {
        'x': newDollarX,
        'y': newDollarY,
        'dx':dx,
        'dy':dy,
        'r':radius,
        'img': img
    };
    dollars.push(newDollar);
});*/

function run() {
    context.clearRect(0, 0, width, height);
    for(d of dollars) {
        draw(d);
        move(d);
        if(dollars.length>30){
            dollars.splice(0,1); //removes not necessary elements and keeps memory low
        }
    }
    window.requestAnimationFrame(run);
}

function draw(dollar) {
    context.beginPath();
    context.drawImage(dollar.img, dollar.x - radius, dollar.y - radius, radius*2, radius*2);
    context.closePath();
}

function move(dollar) {
    if (dollar.x <= radius || dollar.x >= width - radius) dollar.dx = -dollar.dx;
   // if (dollar.y <= radius || dollar.y >= height - radius) dollar.dy = -dollar.dy;
   /* for( var other of dollars){

        if(isDollarCollidingWith(dollar,other)){
            dollar.dx = -dollar.dx;
            dollar.dy = -dollar.dy;
        }
    }*/
    dollar.x += dollar.dx;
    dollar.y += dollar.dy;
}

/*
function isDollarCollidingWith(dollar,other){
    if(other === dollar){
        return false;
    }
    var b1 = {
            x: dollar.x,
            y: dollar.y,
            r: dollar.r
        },
        b2 = {
            x: other.x,
            y: other.y,
            r: other.r
        };
    var d = Math.sqrt((b1.x - b2.x) * (b1.x - b2.x) +
        (b1.y - b2.y) * (b1.y - b2.y));
    return d <= (b1.r + b2.r);
}
*/

