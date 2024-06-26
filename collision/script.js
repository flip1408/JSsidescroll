const canvas = document.getElementById('collission');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;
const enemydeath = [];
let canvasPosition = canvas.getBoundingClientRect();
// console.log(canvasPosition);

class EnemyDeath {
    constructor(x, y){
        this.spriteWidth = 200;
        this.spriteHeigth = 179;
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeigth/2;
        this.x = x - this.width/2;
        this.y = y - this.height/2;
        this.image = new Image();
        this.image.src = 'assets/boom.png';
        this.frame = 0;
        this.timer = 0;
//        this.sound = new Audio();
//        this.sound.src = 'assets/boom.wav';
    }
    update (){
//        if (this.frame === 0) this.sound.play();
        this.timer++;
        if (this.timer % 10 === 0){
            this.frame++;
        };
        
    }
    draw (){
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeigth, this.x, this.y, this.width, this.height);
    }
}

window.addEventListener('click', function(e){
    createAnimation(e);
});

function createAnimation(e){
    let positionX = e.x - canvasPosition.left;
    let positionY = e.y - canvasPosition.top;
    explosions.push(new EnemyDeath(positionX, positionY));
}

function animate(){
    for (let i = 0; i < explosions.length; i++){
        explosions[i].update();
        explosions[i].draw();
        if (explosions[i].frame > 5){
            explosions.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
};
animate();