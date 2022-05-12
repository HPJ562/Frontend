const container=document.getElementById("container")

const Square= 800

for(let i=0;i<Square;i++){
    const square=document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=>setcolor(square))
    square.addEventListener("mouseout",()=>removecolor(square))


    container.appendChild(square)
}

function setcolor(element){
    const color=randomColor()

    element.style.background= color
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}

function removecolor(element){
element.style.background="#1d1d1d"
element.style.boxShadow=`0 0 2px #000`
}
function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1)) +min;
}

function randomColor(){
    return `rgb(${getRandomInteger(0,255)},${getRandomInteger(0,255)},${getRandomInteger(0,255)})`
}