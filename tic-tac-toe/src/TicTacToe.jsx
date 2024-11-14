import { useState } from "react"
export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXturn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const renderSquare = (index)=> {
        return(
            <button className="square" onClick={()=>handleClick(index)}> {board[index]} </button>
        )
    }
    const handleClick = (index) =>{
        const newBoard = [...board];
        newBoard[index] = isXturn ? 'X' :'O';
        setBoard(newBoard);
        setXTurn(!isXturn);
        const winnerCombination = checkWinner(newBoard);
        if(winnerCombination){
            setWinner(newBoard[winnerCombination[0]])
        }
    }
    const checkWinner = (newBoard) =>{
        const combination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0; i<combination.length; i++){
            const [a,b,c] = combination[i];
            if(newBoard[a] && newBoard[a]===newBoard[b] && newBoard[b]===newBoard[c]){
                return combination[i];
            }
        }
        return null;
    }
    const reset = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
    }

    return(
        <>
        <div className="board"> 
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            {winner && <div> <button onClick={reset}> Reset </button> </div>}            
        </div>
        {winner && <div>{winner} is the winner of this game</div>}
        </>
    )
}