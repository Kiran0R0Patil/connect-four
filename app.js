document.addEventListener('DOMContentLoaded', () => 
{
    const squares = document.querySelectorAll('.grid div')
    const resultDisplay = document.getElementById('results')
    const displayCurrentPlayer = document.getElementById('current-player')
    let currentPlayer = 1
    
    const winnerArray = [
        [41,40,39,38],
        [40,39,38,37],
        [39,38,37,36],
        [38,37,36,35],

        [41,34,27,20],
        [40,33,26,19],
        [39,32,25,18],
        [38,31,24,17],
        [37,30,23,16],
        [36,29,22,15],
        [35,28,21,14],

        [34,33,32,31],
        [33,32,31,30],
        [32,31,30,29],
        [31,30,29,28],

        [34,27,20,13],
        [33,26,19,12],
        [32,25,18,11],
        [31,24,17,10],
        [30,23,16,9],
        [29,22,15,8],
        [28,21,14,7],

        [27,26,25,24],
        [26,25,24,23],
        [25,24,23,22],
        [24,23,22,21],

        [27,20,13,6],
        [26,19,12,5],
        [25,18,11,4],
        [24,17,10,3],
        [23,16,9,2],
        [22,15,8,1],
        [21,14,7,0],

        [20,19,18,17],
        [19,18,17,16],
        [18,17,16,15],
        [17,16,15,14],
        
        [13,12,11,10],
        [12,11,10,9],
        [11,10,9,8],
        [10,9,8,7],
        
        [6,5,4,3],
        [5,4,3,2],
        [4,3,2,1],
        [3,2,1,0]
    ]


    function checkBoard(){
        for(let j=0; j<winnerArray.length;j++){
            const check1 = squares[winnerArray[i][0]]
            const check2 = squares[winnerArray[i][1]]
            const check3 = squares[winnerArray[i][2]]
            const check4 = squares[winnerArray[i][3]]
        }
    }

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
            else {alert("Can't go here!")}
            checkBoard()
        }  //end of .onclick
    }   // end of for loop
})  //end of eventListener