const board = document.querySelector('#board');
const colors = ['rgb(180, 236, 49)', 'rgb(243, 202, 19)', 'rgb(243, 127, 19)', 'rgb(243, 19, 19)', 'rgb(19, 198, 243)', 'rgb(19, 79, 243)', 'rgb(161, 19, 243)', 'rgb(243, 19, 213)', 'rgb(112, 238, 160)']
const SQUARES_NAMBER = 638;

for (let i = 0; i < SQUARES_NAMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `4px 2px 2px 1px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const indexColor = Math.floor(Math.random() * colors.length)
    return colors[indexColor];
}