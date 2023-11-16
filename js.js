
let contador = 0

function open() {
const menu_open = document.querySelector('.navbar')
    
contador++
    
if(contador > 2){
    menu_open.style.display = 'none'
    contador -= 2
    }
else{
    menu_open.style.display = 'block'
    }
}