function initalGrid () {
        const grid = document.querySelector('.grid');
        let squareArray = [];
        let column = [];

        for(let colCounter = 0; colCounter < 16; colCounter++) {
                column[colCounter] = document.createElement('div');
                column[colCounter].setAttribute('class', `column col${colCounter}`)    
                grid.appendChild(column[colCounter]); 

                for (let i = 0; i < 16; i++) {
                        squareArray[i] = document.createElement('div');
                        squareArray[i].setAttribute('class', 'square');
                        column[colCounter].appendChild(squareArray[i]);
                }
        }
}

initalGrid();