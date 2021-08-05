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
        this.selectBoard = this.selectBoard.bind(this);
    }

    selectBoard(id) {
        this.setState(prevState =>
            {return {
                ...prevState, 
                selected: id, 
                xIsNext: !prevState.xIsNext
            }
        }
    );
    }

    renderBoard(i) {
        return (
        <Board 
            board_id={i} 
            selector={this.selectBoard}
            game_state={this.state}/>
        );
    }
    
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <div className="ult-row">
                        {this.renderBoard(0)}
                        {this.renderBoard(1)}
                        {this.renderBoard(2)}
                    </div>
                    <div className="ult-row">
                        {this.renderBoard(3)}
                        {this.renderBoard(4)}
                        {this.renderBoard(5)}
                    </div>
                    <div className="ult-row">
                        {this.renderBoard(6)}
                        {this.renderBoard(7)}
                        {this.renderBoard(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;