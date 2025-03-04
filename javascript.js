
//container to hold grid
const container = document.querySelector(".container");



//create grids with cfunction
function makeSquares(numSquares){
    for (let n = 0; n < numSquares; n++){
        let cells = document.createElement('div');
        container.appendChild(cells);
    }
}


makeSquares(256);





