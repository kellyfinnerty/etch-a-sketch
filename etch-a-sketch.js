// initialize the 16 x 16 grid of divs
function createGrid(){
    //create container
    const container = document.createElement('div');
    container.setAttribute('id', 'grid-container');

    document.body.appendChild(container);

    // create divs
    for(var i = 0; i < gridSize; i++){
        for(var j = 0; j < gridSize; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'div-item');
            container.appendChild(div);
        }
    }

    const divs = Array.from(document.querySelectorAll('.div-item'));
    divs.forEach((div) => {
        div.addEventListener('mouseover', addHover)
    });
}

function addHover(e){
    e.target.classList.add('div-hover');
}


function createButtonListeners(){
    var button = document.querySelector("button");

    button.addEventListener('click', clearGrid);

    button.addEventListener('mouseover', function(e){
        e.target.style.color = 'pink';
        e.target.style.border = '2.5px solid #555555';
    }); 
    
    button.addEventListener('mouseout', function(e){
        e.target.style.color = 'black';
        e.target.style.border = '2px solid #555555';
    });
}

function clearGrid(e){
    var body = e.target.parentNode;
    var divs = Array.from(body.querySelectorAll('.div-hover'));

    divs.forEach((div) => {
        div.classList.remove('div-hover');
    });

    /*gridSize = prompt("What grid size? From 0 to 100.");
    while(gridSize < 0 || gridSize > 100){
        gridSize = prompt("What grid size? From 0 to 100.");
    }
    updateGridSize();*/
}

function updateGridSize(){
    //remove all grid elements

}


var gridSize = 16;

createGrid();
createButtonListeners();