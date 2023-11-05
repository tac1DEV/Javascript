const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const computerScoreDisplay = document.getElementById("computer-score");
const userScoreDisplay = document.getElementById("user-score");
let userChoice;
let computerChoice;
let result;
let scoreUser = 0;
let scoreORDI = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{   //"pour chaque bouton, je veux que ca fasse ca"
    userChoice = e.target.id; //recupere l'id de l'element cliqué, qui est le choix de l'utilisateur 
    userChoiceDisplay.innerHTML = userChoice; //injecte l'id de l'element selectionné dans le span "user-choice"
    generateComputerChoice(); //fonction qui va gérer le "choix" de l'ORDI
    getResults(); //fonction qui va afficher le vainqueur
    computerScoreDisplay.innerHTML = scoreORDI; 
    userScoreDisplay.innerHTML = scoreUser; 
}));

function generateComputerChoice(){
    const randomNumber =  Math.floor(Math.random() * possibleChoices.length) +1; //on multiplie math.random avec le nombre de button, ici 3 || Aussi, on math.floor pour n'avoir que des entiers || On ajoute 1 pour n'avoir que 1,2 et 3 comme valeur en sortie

    /*if (randomNumber === 1){
        computerChoice = "Pierre";
    }
    if (randomNumber === 2){
        computerChoice = "Feuille";
    }
    if (randomNumber === 3){
        computerChoice = "Ciseaux";
    }*/

    switch (randomNumber) {
        case 1:
            computerChoice = "Pierre";
            break;
        case 2:
            computerChoice = "Feuille";
            break;
        case 3:
            computerChoice = "Ciseaux";
            break;    
      default:
        computerChoice = "";
    }
    

    computerChoiceDisplay.innerHTML = computerChoice; //injecte l'id de l'element selectionné dans le span "computer-choice"
}

function getResults(){
    if(computerChoice == userChoice){
        result = 'Égalité !';
    }
    if(computerChoice == "Pierre" && userChoice == "Feuille"){
        scoreUser++;
        result = 'Gagné !';
    }
    if(computerChoice == "Feuille" && userChoice == "Ciseaux"){
        scoreUser++;
        result = 'Gagné !';
    }
    if(computerChoice == "Ciseaux" && userChoice == "Pierre"){
        scoreUser++;
        result = 'Gagné !';
    }
    if(computerChoice == "Pierre" && userChoice == "Ciseaux"){
        scoreORDI++;
        result = 'Perdu...';
    }
    if(computerChoice == "Feuille" && userChoice == "Pierre"){
        scoreORDI++;
        result = 'Perdu...';
    }
    if(computerChoice == "Ciseaux" && userChoice == "Feuille"){
        scoreORDI++;
        result = 'Perdu...';
    }
    resultDisplay.innerHTML = result;
}