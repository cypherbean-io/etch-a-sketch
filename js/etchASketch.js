function createGrid(gridSize) {
  for (let i = 1; i <= (gridSize * gridSize); i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
    });
  };
}

function resetGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
}

function resizeGrid() {
  let newGridSize = prompt('Pick a size between 1 and 100');
  while (isNaN(newGridSize) || newGridSize > 100 || newGridSize <= 0) {
    newGridSize = prompt('Pick a size between 1 and 100');
  }
  resetGrid(container);
  createGrid(newGridSize);
}

const container = document.querySelector('#container');
const defaultGridSize = 16;
const sizeButton = document.querySelector('#change-size');

sizeButton.addEventListener('click', () => resizeGrid());

createGrid(defaultGridSize);