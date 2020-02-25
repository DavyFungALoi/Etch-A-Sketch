
let createGrid = () => {
for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div')
    gridSquare.classList.add('grid-square');
    gridSquare.setAttribute("id","gridSquareId")
    document.getElementById('container').appendChild(gridSquare)
    gridSquare.addEventListener("mouseover",changeColor)
    }
    
}
createGrid ();

function changeColor (square) {
    square.target.style.backgroundColor="blue";
}

function resetGrid() {
    document.getElementById('container').innerHTML=""
    const promptinput = prompt("how big do you want your grid?")
    InputGrid = promptinput * promptinput
    
    for (let i = 0; i < InputGrid; i++) {
        let gridSquare = document.createElement('div')
        gridSquare.classList.add('grid-square');
        gridSquare.setAttribute("id","gridSquareId")
        document.getElementById('container').style.gridTemplateColumns = "repeat(InputGrid)"
        document.getElementById('container').style.gridTemplateRows = "repeat(InputGrid)"
        document.getElementById('container').appendChild(gridSquare)
        gridSquare.addEventListener("mouseover",changeColor)
        }
    
}

/*

document.getElementById("gridSquareId").style.backgroundColor="blue";
let changeColor = document.getElementById("gridSquareId");

changeColor.addEventListener("mouseover", function( event ) {
    console.log(hello)
    event.target.style.color = "purple";
})
/*


let createGrid = (div) => {
for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div')
    gridSquare.classList.add('grid-square');
    document.getElementsByClassName('container').appendChild(gridSquare)
    }
    gridSquare.appendChild('container')
}
createGrid();
function Cell() {
    this.cell = document.createElement('div');
    this.hue = Math.floor(Math.random() * 360);
    this.lightness = 90;
    this.darken = function() {
        this.lightness -=10;
    }
    this.makeColor = function() {
        return 'hsla(' + this.hue + ',' + 100 + '%,' + this.lightness + '%' + ',' + 1.0 + ')';
    }
}
*/

/*function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        for(let j = 0; j < size; j++) {
            let newCell = new Cell();
            let square = new Cell().cell;
            square.classList.add('grid');
            square.addEventListener('mouseover',(e) => {
                square.style.backgroundColor = newCell.makeColor();
                newCell.darken();
             
          
        });
            gridRow.classList.add('grid-row'); 
            gridRow.appendChild(square);
      
        }
        gridWrapper.appendChild(gridRow); 
    }
    }*/
    