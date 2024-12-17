let container = document.getElementById('container');

let squaresPerSide = 16;

function createGrid(squaresPerSide){
    container.innerHTML = '';

    let squareSize = 525 / squaresPerSide;


    for (let i = 1; i <= (squaresPerSide * squaresPerSide); i++) {
        let newDiv = document.createElement('div');

        newDiv.style.width =  `${squareSize}px`;
        newDiv.style.height =  `${squareSize}px`;
        newDiv.style.boxSizing = 'border-box';
        
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = 'black';
        });
    }
}

createGrid(squaresPerSide);

resetButton.addEventListener('click', () => {
    squaresPerSide = prompt('How many squares per side? (max 100)');
    createGrid(squaresPerSide);
});


