

const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function () {
        const config = { childList: true };
        cont observer = new MutationObserver(() => takeTurn());
        board.positions.forEach((el) => observer.observe(el, config));
        takeTurn();
    }
    function takeTurn() {

        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
        } else {
            computerPlayer.takeTurn();
        }
        turn ++;
    };

    }
}

function Board () {
    this.positions = Array.from(document.querySelectorAll('.col'));


}

function HumanPlayer(board) {
    this.takeTurn = function() {
        board.positions.forEach (el => ell.addEventListener('click', handleTurnTaken));
    }

    function handleTurnTaken(event) {
        event.target.innerText = 'x';
    }

    
}

function ComputerPlayer(board) {
    this.takeTurn = function() {
        console.log("computer player turn")
    }
    
}
// document.addEventListener("click", function(){
//     // document.getElementById("x").innerHTML = "x";
//     var x = document.getElementsByClassName("container");
    
// })
// ticTacToeGame.start();
// function TicTacToeGame() {
//     const board = new board();

//     this.start = function() {


//     }
// }


