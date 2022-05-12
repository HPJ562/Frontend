const container = document.getElementById("container")

const SQUARES = 800

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    square.classList.add("square")

    container.appendChild(square)
}