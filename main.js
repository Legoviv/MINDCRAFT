var canvas=new fabric.Canvas('myCamvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.pnj" , function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function newImage(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        block_image_object=Img;

        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top:player_y,left:player_x
        });
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if (e.shiftKey && keyPressed == '80'){
    console.log("p & shift pressed together");
    block_image_width = block_image_width+10;
    block_image_height = block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if (e.shiftKey && keyPressed == '77'){
    console.log("m & shift pressed together");
    block_image_width = block_image_width-10;
    block_image_height = block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if (keyPressed == '37'){
    console.log("left");
    left();
}

if (keyPressed == '38'){
    console.log("up");
    up();
}

if (keyPressed == '39'){
    console.log("right");
    right();
}

if (keyPressed == '40'){
    console.log("down");
    down();
}

if (keyPressed == '87'){
    newImage('wall.jpg');
    console.log('w');
}

if (keyPressed == '71'){
    newImage('ground.png');
    console.log('g');
}

if (keyPressed == '76'){
    newImage('light_green.png');
    console.log('l');
}

if (keyPressed == '84'){
    newImage('trunk.jpg');
    console.log('t');
}

if (keyPressed == '82'){
    newImage('roof.jpg');
    console.log('r');
}

if (keyPressed == '89'){
    newImage('yellow_wall.png');
    console.log('y');
}

if (keyPressed == '68'){
    newImage('dark_green.png');
    console.log('d');
}

if (keyPressed == '85'){
    newImage('unique.png');
    console.log('u');
}

if (keyPressed == '67'){
    newImage('cloud.jpg');
    console.log('c');
}
}