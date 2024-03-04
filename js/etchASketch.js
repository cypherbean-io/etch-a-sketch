const container = document.querySelector('#container');
const defaultGridSize = 16;

function createGrid(gridSize) {
  for (let i = 1; i <= (gridSize * gridSize); i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
    });
  };
}

createGrid(defaultGridSize);