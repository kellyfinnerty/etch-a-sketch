function createContainer(container){
    container = document.createElement('div');
    container.setAttribute('id', 'grid-container');

    document.body.appendChild(container);
}


function createCells(){
    const container = document.querySelector('#grid-container');
    var cellSize = gridSize / numCells;

    container.style.gridTemplateRows = `repeat(${numCells}, ${cellSize}px)`;
    container.style.gridTemplateColumns = `repeat(${numCells}, ${cellSize}px)`;

    for(var i = 0; i < numCells; i++){
        for(var j = 0; j < numCells; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'cell');
            div.style.width = cellSize;
            div.style.length = cellSize;
            container.appendChild(div);

        }
    }
}


function createHoverListeners(){
    const divs = Array.from(document.querySelectorAll('.cell'));
    divs.forEach((div) => {
        div.addEventListener('mouseover', addHover)
    });
}

function addHover(e){
    e.target.classList.add('div-hover');
}


function clearGrid(e){
    var body = e.target.parentNode;
    var divs = Array.from(body.querySelectorAll('.div-hover'));

    var inputNumCells = prompt("What grid size? From 0 to 100.");
    if (!inputNumCells || isNaN(inputNumCells)) return

    if(inputNumCells < 0 || inputNumCells > 100){
        inputNumCells = prompt("Invalid grid size. What grid size? From 0 to 100.");
    }

    // if same size, clear and return
    if (numCells === inputNumCells){
        divs.forEach((div) => {
            div.classList.remove('div-hover');
        });
        return;
    }

    // input validated so update numCells
    numCells = inputNumCells;

    removeCells();  //remove old size
    createCells();
    createHoverListeners();
}

function removeCells(){
    //remove all grid elements
    var cells = Array.from(document.body.querySelectorAll('.cell'));
    
    cells.forEach((cell) => {
        cell.parentNode.removeChild(cell);
    });
}


function createClearListeners(){
    var button = document.querySelector("button");

    button.addEventListener('click', clearGrid);

    button.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = '#f0f5f1';
        e.target.style.border = '2.5px solid #555555';
    }); 
    
    button.addEventListener('mouseout', function(e){
        e.target.style.backgroundColor = 'white';
        e.target.style.border = '2px solid #555555';
    });
}



var gridSize = 480;
var numCells = 16;
var container;

// called when the webpage first opens
function initializeGrid(){
    createContainer();
    createCells();
    createHoverListeners();
    createClearListeners();
}

initializeGrid();