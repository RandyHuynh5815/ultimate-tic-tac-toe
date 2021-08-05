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
            || this.state.squares[i] || this.props.winner) {
            return;
        }
        if (this.props.game_state.boards[i]) {
            this.props.selector(null);
        } else {
            this.props.selector(i);
        }
        let squares = this.state.squares.slice();
        squares[i] = this.props.game_state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares});
        this.props.winBoard(this.props.board_id, squares);
    }

    renderSquare(i) {
        return (<Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}/>
        );
    }

    render() {
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;