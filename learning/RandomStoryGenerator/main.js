const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize'); 
const story = document.querySelector('.story');


let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. :name: saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


function randomValueFromArray(array){ 
    const random = Math.floor(Math.random()*array.length); 
    return array[random]; 
}

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    ItemTable = [xItem,yItem,zItem];
    insertTable = ["x","y","z"];

    for(i=0;i<ItemTable.length;i++){
        newStory = newStory.replaceAll(":insert"+insertTable[i]+":",ItemTable[i]);
    }

    if(customName.value !== '') { 
    const name = customName.value;
    newStory = newStory.replace(":name:",name);
    }else{
    newStory = newStory.replace(":name:","Bob");
    }

    if(document.getElementById("uk").checked) { 
        const weight = Math.round(300/14); 
        const temperature = Math.round((94-32)*(5/9));
        newStory = newStory.replace("94 fahrenheit",temperature + " centigrade");
        newStory = newStory.replace("300 pounds",weight + " stone");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';


}