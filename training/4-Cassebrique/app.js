const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score');
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 10;
const boardWidth = 550;
const boardHeight = 275;
let timerId = null;

const userStart = [230, 10];
const ballStart = [275, 30];
let currentPosition = userStart;
let ballCurrentPosition = ballStart;
let xDirection = 2;
let yDirection = 2;
let score = 0;



//creation des blocs

class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

//creation des blocs

//tous mes blocs

const blocks = [
    new Block(30,270),
    new Block(140,270),
    new Block(250,270),
    new Block(360,270),
    new Block(470,270),
    new Block(30,240),
    new Block(140,240),
    new Block(250,240),
    new Block(360,240),
    new Block(470,240),
];

//tous mes blocs



//dessin des blocs

function addBlock() {

    for(let i = 0; i<blocks.length; i++){
    const block = document.createElement('div');
    block.classList.add('bloc');
    block.style.left = blocks[i].bottomLeft[0] + 'px';//on vient recuperer la valeur de l'objet Block (10) contenu dans le tableau blocks
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block);
    }
}

addBlock();

//dessin des blocs

//ajouter le joueur

const user = document.createElement('div');
user.classList.add('user');
user.style.left = currentPosition[0] + "px";
user.style.bottom = currentPosition[1] + "px";
grid.appendChild(user);

//ajouter le joueur

//dessiner le joueur

function drawUser(){
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

//dessiner le joueur

//dessiner la balle

function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 45 + "px";
    ball.style.bottom = ballCurrentPosition[1] + 20 + "px";
}

//dessiner la balle

//bouger le joueur

function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
            currentPosition[0]-=10;
            drawUser();
            }
        break;
        case 'ArrowRight':
            if(currentPosition[0] < 500){
            currentPosition[0]+=10;
            drawUser();
            }
        break;
    }
}

document.addEventListener('keydown', moveUser);

//bouger le joueur

//dessiner le joueur

const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

//dessiner le joueur

//bouger la balle

function moveBall(){
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
    console.log(ballCurrentPosition);
}

timerId = setInterval(moveBall, 20);

//collisions

function checkForCollisions(){
    
    //collision avec bloc
    for(let i=0; i< blocks.length; i++){
        if(
            (ballCurrentPosition[0] - 30> blocks[i].bottomLeft[0]  && ballCurrentPosition[0] - 30< blocks[i].bottomRight[0]) && ((ballCurrentPosition[1] + ballDiameter + 30) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = Array.from(document.querySelectorAll('.bloc'));
            allBlocks[i].classList.remove('bloc'); //plus visible sur l'ecran mais tjrs present
            blocks.splice(i, 1);//retirer le bloc du tableau de blocs avec splice() qui remplace le contenu d'un tableau
            changeDirection();
            score++;
            scoreDisplay.innerHTML = score;
        }
    }


    //collision murs
    if(
        ballCurrentPosition[0] >= (boardWidth - ballDiameter ) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter)|| 
        ballCurrentPosition[0] <= -30 - ballDiameter) 
        {
        changeDirection();
    }

    //collision joueur
    if(
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
    ){
        changeDirection();
    }

    //GAME OVER
    if(ballCurrentPosition[1] <= 0){
        clearInterval(timerId);
        scoreDisplay.innerHTML = 'You lose';
        document.removeEventListener('keydown', moveUser);
    }

}

function changeDirection(){
    if(xDirection === 2 && yDirection === 2 ){
        xDirection = 2;
        yDirection = -2;
        return;
    }
    if(xDirection === 2 && yDirection === -2 ){
        xDirection = -2;
        yDirection = -2;
        return;
    }
    if(xDirection === -2 && yDirection === -2 ){
        xDirection = -2;
        yDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection === 2 ){
        xDirection = 2;
        yDirection = 2;
        return;
    }
    
}

//collisions

//bouger la balle
