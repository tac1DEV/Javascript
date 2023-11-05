const squares = document.querySelectorAll(".square"); //recupere toutes les cases du grid
const timeLeft = document.querySelector("#time-left");//met a jour le temps restant
const score = document.querySelector("#score");//nombre de taupe touchées
const start = document.getElementById('start');
const reset = document.createElement('button');
const btn = document.getElementById('btn');

let result = 0;
let hitPosition;
let timerId = null;
let timerIdGolden = null;
let Timing = 20;
let currentTime = Timing;
let started = false;


start.addEventListener('click', startFct);

//fonctionnement du jeu

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    });
if(started == true){
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}
}
randomSquare();

function randomGoldenSquare(){
squares.forEach(square =>{
    square.classList.remove('GoldenMole');
});
if(started == true){
let randomGoldenSquare = squares[Math.floor(Math.random() * 9)];
randomGoldenSquare.classList.add('GoldenMole');
hitPositionGolden = randomGoldenSquare.id;
}
}
randomGoldenSquare();

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id == hitPosition && started == true){//si la case est touché
            hitPosition = null;
            result++;
            score.textContent = result;
        }
        if(square.id == hitPositionGolden && started == true){//si la case est touché
            hitPositionGolden = null;
            result = result + 3;
            score.textContent = result;
        }
    });
});



function moveMole(){
   timerId = setInterval(randomSquare, 400);//temps de changement de case
   timerIdGolden = setInterval(randomGoldenSquare, 400);//temps de changement de case
}
moveMole();

//fonctionnement du jeu

function startFct(){

started = true;
result = 0;

//Reset Game
    
    function resetFct(){
        reset.textContent = 'reset';
        btn.appendChild(reset);
        reset.addEventListener('click', () =>{
        score.textContent = 0;
        started = false;
            currentTime = Timing;
            timeLeft.classList.remove("gone");
            clearInterval(countDownTimerId);
            timeLeft.textContent = "";
            start.classList.remove("gone");
            reset.remove();
        });
}
    resetFct();
    start.classList.add("gone");

    //Reset Game

    
    //compte a rebours
    
function countDown(){

    currentTime--;
    timeLeft.textContent = currentTime;

    //fin de partie 

    if(currentTime == 0){
        started = false;
        timeLeft.classList.add('gone');
        reset.remove();
        clearInterval(countDownTimerId);
        alert('LOL t naze ' + result);
        const retry = document.createElement('button');
        retry.textContent = 'retry';
        btn.appendChild(retry);
        retry.addEventListener('click', () =>{
            start.classList.remove("gone");
            retry.remove();
            currentTime = Timing;
            timeLeft.textContent = "";
            score.textContent = 0;
        });
    }
    
    //fin de partie 

}

let countDownTimerId = setInterval(countDown, 1000);
timeLeft.classList.remove("gone");

    //compte a rebours

}

