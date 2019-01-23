
let img;
let img2;
let img3;
let img4;
let img5;
let img6;

function preload(){
    img = loadImage('images/mlk.png');
    img2 = loadImage('images/MG.png');
    img3 = loadImage('images/MM.png');
    img4 = loadImage('images/hope.png');
    img5 = loadImage('images/love.png');
    img6 = loadImage('images/stars.png');
}

//movement for 'Keep moving forward...'
var x = 50.0;
var y = 50;
var speed = 2.5;

function setup (){
    createCanvas(800, 600);
}

function draw(){
    background(228, 181, 252);
    fill (1);

    image(img6, -250, -100, img.width, img.height)/6;

    //Interaction
    if (mouseIsPressed){
        image(img4, 100, 100,img.width/3, img.height/4);
    }else{
        image(img5, 190, 140, img.width/3, img.height/2);
        }

    //'Keep moving forward...'
    x += speed;

    if (x > width){
        x=0;
    }
    fill(24, 0, 132);
    textSize(40);
    text('Keep moving forward...', x, y);

    //MLK quote
    let s = '"Injustice anywhere is a threat to justice everywhere." -Martin Luther King Jr.';
    fill(136, 255, 127);
    textSize(20);
    textFont('Georgia')
    text(s, 500, 520, 300, 250);

    //MLK image
    image(img, 480, 300, img.width/3, img.height/3);

    //MG quote
    let a = '"Optimism for me is not a passive expectation that things will get better; it is a conviction that we can make things better." -Melinda Gates'
    fill(246, 255, 127);
    textSize(20);
    textFont('Georgia');
    text (a, 10, 500, 400, 100);

    //MG image
    image(img2, 10, 270, img.width/5, img.height/2.5);

    //MM quote
    let b = '"Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has." -Margaret Mead'
    fill (255, 127, 235);
    textSize(20);
    textFont('Georgia')
    text (b, 490, 160, 300, 400)

    //MM image
    image(img3, 600, 5, img.width/5, img.height/4);
    
    }









