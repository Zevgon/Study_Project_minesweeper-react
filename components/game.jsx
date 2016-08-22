import React from 'react';
import {Board as mineBoard, Tile as mineTile} from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor () {
    super();
    this.state = {board: new mineBoard(10, 5)};
  }

  updateGame() {

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
