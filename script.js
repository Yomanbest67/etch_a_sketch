const resetBtn = document.querySelector(".reset");
const etchBoard = document.querySelector(".etch");
const colors = ["blue", "red", "green", "yellow", "purple", "orange", "brown", "pink", "cyan"];

resetBtn.addEventListener("click", generatePad);

function generatePad () {
    let userInput = parseInt(prompt('How many squares?'));
    if (userInput > 100) {userInput = 100;}

    removeAllChildNodes(etchBoard);

    for (let i = 0; i < userInput*userInput; i++){
        const gridSquares = document.createElement('div');

        gridSquares.style.backgroundColor = 'grey';
        gridSquares.style.height = `${700/userInput}px`;
        gridSquares.style.width = `${700/userInput}px`;

        gridSquares.addEventListener('mouseover', () => {
            gridSquares.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        });

        gridSquares.classList.add('gridSquare');
        etchBoard.appendChild(gridSquares);
    }   

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}