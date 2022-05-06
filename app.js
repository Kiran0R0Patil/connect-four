document.addEventListener('DOMContentLoaded', () => 
{
    const squares = document.querySelectorAll('.grid div')
    const resultDisplay = document.getElementById('result')
    const displayCurrentPlayer = document.getElementById('current-player')
    let currentPlayer = 1

    for(let i=0; i< squares.length; i++){
        squares[i].innerHTML = i
            
        squares[i].onclick = () => {
            //if the square below your current square is taken, you can go on top of it
            if(squares[i+7].classList.contains('taken')){
                if(currentPlayer == 1){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player1')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                else if(currentPlayer == 2) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player2')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            }
            else alert("Can't go here!")
        }  //end of .onclick
    }   // end of for loop
})  //end of eventListener