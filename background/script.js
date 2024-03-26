const canvas = document.getElementById('background');
const ctx = canvas.getcontext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/layer-5.png';

window.addEventListener('load', function(){
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gamespeed;
    slider.addEventListener('change', function(e){
        console.log(e.target.value);
        gamespeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
    });
    
    class Layer {
        constructor(image, speedModifier){
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.x2 = this.width;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        update(){
            this.speed = gameSpeed * this.speedModifier;
            if (this.x <= -this.width){
                this.x = this.width + this.x - this.speed;
            }
            this.speed = gameSpeed * this.speedModifier;
            if (this.x2 <= -this.width){
                this.x2 = this.width + this.x2 - this.speed;
            }
            this.x = Math.floor(this.x - this.speed);
            this.x2 = Math.floor(this.x2 - this.speed);
        }
        draw(){
            ctx.drawimage(this.image, this.x, this.y, this.width, this.height)
            ctx.drawimage(this.image, this.x2, this.y, this.width, this.height)
        }
    }
    
    const layer1 = new Layer(Backgroundlayer1, 0.2);
    const layer2 = new Layer(Backgroundlayer2, 0.4);
    const layer3 = new Layer(Backgroundlayer3, 0.6);
    const layer4 = new Layer(Backgroundlayer4, 0.8);
    const layer5 = new Layer(Backgroundlayer5, 1);
    
    const gameObjects = [layer1, layer2, layer3, layer4, layer5]
    
    //Old animation
    // let x = 0;
    // let x2 = 2400;
    // fuction animate(){
    //    ctx.drawImage(backgroundLayer4, x2, 0);
    //    ctx.drawImage(backgroundLayer4, x2, 0);
    //    if (x < -2400) x = 2400 + x2 - gameSpeed;
    //    else x -= gameSpeed;
    //    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    //    else x2 -= gameSpeed;
    //    requestAnimationFrame(animate);
    // };
    
    function animate(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        })
        requestAnimationFrame(animate);
    };
    animate();    
});

const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gamespeed;
slider.addEventListener('change', function(e){
    console.log(e.target.value);
    gamespeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value;
});

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width){
            this.x = this.width + this.x - this.speed;
        }
        this.speed = gameSpeed * this.speedModifier;
        if (this.x2 <= -this.width){
            this.x2 = this.width + this.x2 - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw(){
        ctx.drawimage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawimage(this.image, this.x2, this.y, this.width, this.height)
    }
}

const layer1 = new Layer(Backgroundlayer1, 0.2);
const layer2 = new Layer(Backgroundlayer2, 0.4);
const layer3 = new Layer(Backgroundlayer3, 0.6);
const layer4 = new Layer(Backgroundlayer4, 0.8);
const layer5 = new Layer(Backgroundlayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5]

//Old animation
// let x = 0;
// let x2 = 2400;
// fuction animate(){
//    ctx.drawImage(backgroundLayer4, x2, 0);
//    ctx.drawImage(backgroundLayer4, x2, 0);
//    if (x < -2400) x = 2400 + x2 - gameSpeed;
//    else x -= gameSpeed;
//    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
//    else x2 -= gameSpeed;
//    requestAnimationFrame(animate);
// };

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
};
animate();
