const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png',
        border: '#b3b1b9'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
        border: '#a794f6'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
        border: '#8eafef'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
        border: '#00e1f6'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
        border: '#c5d87e'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
        border: '#d69184'
    },
    {
        name: 'fries',
        img: 'img/fries.png',
        border: '#b3b1b9'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
        border: '#a794f6'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
        border: '#8eafef'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
        border: '#00e1f6'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
        border: '#c5d87e'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
        border: '#d69184'
    }
];
//console.log(cardArray);
cardArray.sort(() => 0.5 - Math.random()); //trier un tableau aléatoirement => sort compare 2 valeurs du tableau

const grid = document.querySelector('#grid');
const result = document.querySelector('#result');
var cardsChosen = []; //on fait un tableau des deux cartes qu'on a choisit pour tester si elles se correspondent
var cardsChosenIds = [];//on recupere l'id des cartes choisies
var cardsWon = [];

function createBoard(){
    for(let i = 0; i<cardArray.length;i++){ //on fait une boucle qu'il genere dynamiquement le nombre de cartes de notre jeu en fonction du nombre d'element du tableau 
        const card = document.createElement('img'); //on creer une balise img pour chaque itération
        card.setAttribute('src', 'img/blank.png');//on ajoute l'attribut source a chacune de ses balise img
        card.setAttribute('data-id', i); //on ajoute un id correspondant à l'iteration
        card.addEventListener('click', flipCard); //on veut que lorsqu'on clique sur une carte, cela active la fonction "flipcard"
        grid.appendChild(card);//on insere les elements du tableau dans la div grid
    }
    result.textContent = cardsWon.length;
}
createBoard();


function checkMatch(){
    const cards = document.querySelectorAll('#grid img');//recupere toutes les images dans le grid
    const OneId = cardsChosenIds[0];//on les utilise beaucoup => on en fait une constante pour clarifier le code
    const TwoId = cardsChosenIds[1];//on les utilise beaucoup => on en fait une constante pour clarifier le code

    if(cardsChosen[0] === cardsChosen[1] && OneId !== TwoId){
        cards[OneId].style.borderColor = "green";
        cards[TwoId].style.borderColor = "green";
        cards[OneId].removeEventListener('click', flipCard);
        cards[TwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        result.textContent = cardsWon.length;
    }else{
        cards[OneId].setAttribute('src', 'img/blank.png');
        cards[TwoId].setAttribute('src', 'img/blank.png');
        cards[OneId].style.borderColor = "";
        cards[TwoId].style.borderColor = "";
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == (cardArray.length/2)){
        const resetDiv = document.getElementById("reset");
        const reset = document.createElement('button');
        reset.id = "resetBTN";
        result.textContent = "Bravo, vous avez gagné !";
        reset.textContent = "Recommencer";
        resetDiv.appendChild(reset);
        reset.addEventListener('click',resetGame);
    }
}

function flipCard(){

    //console.log(cardArray);//on voit tous les element du tableau
    const cardId = this.getAttribute('data-id');//on recupere l'id de chaque carte
    //console.log(cardArray[cardId].name); //on //console.log le nom de la carte cliqué
    cardsChosen.push(cardArray[cardId].name); //on push dans notre tableau, les valeurs des cartes cliquées
    cardsChosenIds.push(cardId);//on push dans le tableau des chosenIds l'id des cartes
    //console.log("id:", cardsChosenIds);
    //console.log("clicked", cardId);
    //console.log("cards Chosen", cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);//la carte se "retourne"
    this.style.borderColor = cardArray[cardId].border;//la border de la carte est unique
    if(cardsChosen.length === 2){//on veut clear le tableau si les deux cartes cliquées ne matchent pas 
        setTimeout(checkMatch, 500); //on ajoute 500ms sur le checkmatch
    }
    
}

function resetGame(){
    cardArray.sort(() => 0.5 - Math.random());
    cardsWon = [];
    document.getElementById("grid").remove();
    document.getElementById("resetBTN").remove();
    const grid = document.createElement('div');
    grid.id="grid";
    document.body.appendChild(grid);
    for(let i = 0; i<cardArray.length;i++){ 
        const card = document.createElement('img'); 
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
    result.textContent = cardsWon.length;
}
