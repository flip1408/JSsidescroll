let playerState = 'run';
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e){
        playerstate = e.target.value;
})

const canvas = document.getElementsById('fpcanvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const firstplayerImage = new Image();
playerImage.src = 'assets/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5; //slow down animation, every time staggerFrames == 0 frame updates
const spriteAnimations = [];
const animationStats = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 9,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'stun',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'dead',
        frames: 12,
    },
    {
        name: 'damage',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames =  {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteanimations[state.name] = frames;
});
console.log(animationStates);


function animation(){
    //ctx.fillRect(50,50,100,100);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; //anim slow down clean up
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    //ctx.drawimage(image, sy, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, 0, 0, frameX, frameY, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Old Anim
    /*
    frameX = spriteWidth * position;
    frameY = spriteHeight * position;
       if (gameFrame % staggerFrames == 0){
       if (frameX < 7) frameX++; //movement animation
       else frameX = 0; //movement static 
    }*/
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();