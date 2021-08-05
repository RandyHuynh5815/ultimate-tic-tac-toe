import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        if ((this.props.game_state.selected && this.props.board_id !== this.props.game_state.selected)
            || this.state.squares[i-1] || this.props.winner) {
            return;
        }
        if (this.props.game_state.boards[i-1]) {
            this.props.selector(null);
        } else {
            this.props.selector(i);
        }
        let squares = this.state.squares.slice();
        squares[i-1] = this.props.game_state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares});
        this.props.winBoard(this.props.board_id, squares);
    }

    renderSquare(i) {
        return (<Square 
            value={this.state.squares[i-1]}
            onClick={() => this.handleClick(i)}/>
        );
    }

    render() {
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

export default Board;