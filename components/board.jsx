import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor () {
    super();
  }


  render () {
    let grid = this.props.board.grid;
    let rows = [];
    let updateGame = this.props.updateGame;
    grid.forEach((row, idx) => {
      let tiles = [];
      for (let i = 0; i < row.length; i++) {
        tiles.push(<li key={[idx, i]}><Tile tile={row[i]} updateGame={updateGame}/></li>);
      }
      rows.push(<ul key={idx}>{tiles}</ul>);
    });



    return(
      <div id="board" className="group">
          {rows}
      </div>
    );
  }
}

export default Board;
