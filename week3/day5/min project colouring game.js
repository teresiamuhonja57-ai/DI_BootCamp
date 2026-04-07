    let selectedColor = "black";
let isDrawing = false;

// 1. Generate the grid squares dynamically
const grid = document.getElementById('grid');
for (let i = 0; i < 2400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}

// 2. Pick a color from the palette
const colors = document.querySelectorAll('.color');
colors.forEach(colorDiv => {
    colorDiv.addEventListener('click', () => {
        selectedColor = colorDiv.style.backgroundColor;
    });
});

// 1. Detect when mouse is pressed anywhere on the grid
grid.addEventListener('mousedown', () => {
    isDrawing = true;
});

// 2. Detect when mouse is released anywhere on the page
window.addEventListener('mouseup', () => {
    isDrawing = false;
});

// 3. The drawing action
const allSquares = document.querySelectorAll('.square');
allSquares.forEach(square => {
    // Fill on a single click
    square.addEventListener('mousedown', () => {
        square.style.backgroundColor = selectedColor;
    });

    // Fill while dragging
    square.addEventListener('mouseover', () => {
        if (isDrawing) {
            square.style.backgroundColor = selectedColor;
        }
    });
});

// 4. Clear button functionality
document.getElementById('clear-btn').addEventListener('click', () => {
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});