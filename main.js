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

let userInput = prompt("How many squares x squares do you want? Make sure that you input a number between 1 and 100.");



while ((Number.isInteger(parseInt(userInput)) == false) || (parseInt(userInput) > 100) || (parseInt(userInput) < 1)) {
        userInput = prompt("How many squares x squares do you want? Make sure that you input a number between 1 and 100.");
        
}

window.onload=function () {
        initalGrid(userInput);


        const whiteButton = document.querySelector('.whiteButton');
        const eraserButton = document.querySelector('.eraserButton');

        console.log(whiteButton);
        console.log(eraserButton);

        whiteButton.addEventListener('click', () => {
                whiteButton.classList.add('clicked');
                eraserButton.classList.remove('clicked');
        });

        eraserButton.addEventListener('click', () => {
                eraserButton.classList.add('clicked');
                whiteButton.classList.remove('clicked');
        })


        const squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
                square.addEventListener('mouseover', () => {
                        console.log('1');
                        if (whiteButton.classList.contains('clicked')) {
                                console.log('2');
                                square.style.backgroundColor = 'white';
                        } else if (eraserButton.classList.contains('clicked')) {
                                square.style.backgroundColor = 'black';
                        }
                });
        });
}