//creer le nombre mystere
let randomNumber = Math.floor(Math.random() * 100) + 1 ;

//selectionner les guess et le message pour indiquer a l'utilisateur si le nb mystere est sup ou inf
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

//selectionner l'input et le btn pour tester le nombre saisi
let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");

//Gerer le nombre de try et le reset du jeu
let guessCount = 1;
let resetButton;

function checkGuess() {

    let userGuess = Number(guessField.value); //convertit en nombre la chaine de caractere saisie dans guessField
    if(guessCount === 1){ //comportement a la premiere execution
        guesses.textContent = 'Propositions précédentes&nbsp;: ';
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){//comportement en cas de victoire
        lastResult.textContent = "Bravo, tu as trouvé le nombre !";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }else if(guessCount === 10){//comportement en cas de défaite
        lastResult.textContent = '!!! PERDU&nbsp;!!!!';
        setGameOver();
    }else{//comportement en cas de guess (de base)
        lastResult.textContent = 'Faux&nbsp;!';
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Le nombre saisi est trop petit.';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Le nombre saisi est trop grand.';
        }
    }

    guessCount++; //increment le nb de guess
    guessField.value = ""; //vider l'input
    guessField.focus(); //focus l'input
}

checkGuess();