import React from 'react';


class Tile extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    let display = "";
    if (this.props.flagged) {
      display = "flagged";
    } else if (this.props.explored) {
      display = "revealed";
    } else if (this.props.bombed) {
      display = "bombed";
    }
    return(
      <div className={display}>
      </div>
    );
  }
}

export default Tile;
