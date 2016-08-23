import React from 'react';
import {Board as mineBoard, Tile as mineTile} from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor () {
    super();
    this.state = {board: new mineBoard(10, 10)};
  }

  updateGame(tile, flagged) {
    if (!flagged) {
      tile.props.tile.explore();
    } else {
      tile.props.tile.toggleFlag();
    }
    tile.setState({board: tile.props.tile.board});
  }

  render () {
    return(
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <h1>Minesweeper</h1>
      </div>
    );
  }
}

export default Game;
