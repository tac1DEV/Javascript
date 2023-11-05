/*tag la div mere contenant les images*/ 
const imgs = document.getElementById("imgs"); 
/*tag toutes les images contenues dans la div mere*/ 
const img = document.querySelectorAll("#imgs img");

let index = 0;

function slide(){
    if(index > img.length - 1){
        index = 0;
    }

    imgs.style.transform = `translateX(${-index*500}px)`
    index++;
    
}

setInterval(slide, 2000);