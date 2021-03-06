import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            boards: Array(9).fill(null),
            selected: null,
            xIsNext: true,
        };
        this.updateBoard = this.updateBoard.bind(this);
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }

    updateBoard(prevBoardId, prevSquares, newBoardId) {
        const boards = this.state.boards.slice();
        boards[prevBoardId-1] = this.calculateWinner(prevSquares);
        let newBoard = newBoardId;
        if (boards[newBoardId-1]) {
            newBoard = null;
        }
        
        this.setState(prevState =>
            {return {
                boards: boards, 
                selected: newBoard, 
                xIsNext: !prevState.xIsNext
            }
        }
        );
    }

    renderBoard(i) {
        if (this.state.boards[i-1]) {
            return <div className="won">{this.state.boards[i-1]}</div>
        }
        return (
                <Board 
                board_id={i} 
                updateBoard={this.updateBoard}
                winner={this.calculateWinner(this.state.boards)}
                game_state={this.state}/>
        );
    }
    
    render() {
        console.log(this.state)
        const winner = this.calculateWinner(this.state.boards);
        let status;
        let board;
        if (winner) {
            status = 'Winner: ' + winner;
            board = 'Game Over';
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
            if (this.state.selected) {
                board = 'Playing on Board ' + (this.state.selected).toString();
            } else {
                board = 'Playing on any available board';
            }
        }
        return (
            <div className="game">
                <div className="game-board">
                    <div className="status">{status}</div>
                    <div className="status">{board}</div>
                    <div className="ult-row">
                        {this.renderBoard(1)}
                        {this.renderBoard(2)}
                        {this.renderBoard(3)}
                    </div>
                    <div className="ult-row">
                        {this.renderBoard(4)}
                        {this.renderBoard(5)}
                        {this.renderBoard(6)}
                    </div>
                    <div className="ult-row">
                        {this.renderBoard(7)}
                        {this.renderBoard(8)}
                        {this.renderBoard(9)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;