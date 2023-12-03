const carrossel= document.querySelector(".item-carrossel")
const itemimg =document.querySelector(".item-carrossel img")
let contador = 0

function slider(){
    contador++

    if(contador > itemimg.length -1){
        contador = 0
    }

    carrossel.style.transform = `translateX(${-contador * 100}vw)`
}

setInterval(slider, 5000)