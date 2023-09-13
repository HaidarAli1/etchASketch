function initalGrid (numRows) {
        const grid = document.querySelector('.grid');
        let squareArray = [];
        let column = [];

        for(let colCounter = 0; colCounter < numRows; colCounter++) {
                column[colCounter] = document.createElement('div');
                column[colCounter].setAttribute('class', `column col${colCounter}`)    
                grid.appendChild(column[colCounter]); 

                for (let i = 0; i < numRows; i++) {
                        squareArray[i] = document.createElement('div');
                        squareArray[i].setAttribute('class', 'square');
                        column[colCounter].appendChild(squareArray[i]);
                }
        }
        return null;
}
initalGrid(16);

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {

        square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'blue';
        });
});