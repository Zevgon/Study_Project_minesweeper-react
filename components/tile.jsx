import React from 'react';


class Tile extends React.Component {
  constructor (props) {
    super(props);
    // this.playMove = this.playMove.bind(this);
  }

  // playMove(){
  //   this.props.tile.explore();
  //   this.render();
  // }

  bombCountDisplay(){
    if (this.props.tile.explored) {
      return this.props.tile.adjacentBombCount();
    }
  }

  handleClick(e) {
    debugger;
    this.props.updateGame(this, e.altKey);
  }

  render () {
    let display = "tile";
    if (this.props.tile.flagged) {
      display += " flagged";
    }

    if (this.props.tile.explored) {
      display += " revealed";
    }

    if (this.props.tile.bombed) {
      display += " bombed";
    }
    return(
      <li key={this.props.tile.pos} onClick={this.handleClick.bind(this)} className={`${display} group`}>{this.bombCountDisplay()}
      </li>
    );
  }
}

export default Tile;
