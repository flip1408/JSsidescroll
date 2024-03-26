/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('enemy');
const ctx = canvas.getcontext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.width = 1000;
const numberOfEnemies = 100;
const enemiesArray = []

let gameFrame = 0;


// old enemy
/*
enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}*/


class EnemyBat {
    constructor(){
        this.image = new Image();
        this.image.src = 'assets/enemy1.png';
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        if (gameFrame % 2 === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};
for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new EnemyBat());
}

console.log(enemiesArray);
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
