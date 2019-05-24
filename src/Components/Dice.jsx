import React, { Component } from 'react';

class Dice extends Component {
  state = { value: null };
  render() {
    const faceGrid = {
      1: '    ·    ',
      2: '·       ·',
      3: '·   ·   ·',
      4: '· ·   · ·',
      5: '· · · · ·',
      6: '· ·· ·· ·',
    };

    return (
      <div className="die-container">
        {this.state.value && (
          <div className="die-face" style={{ background: this.props.colour }}>
            {this.createGrid(faceGrid)}
          </div>
        )}
      </div>
    );
  }

  createGrid = faceGrid => {
    return faceGrid[this.state.value].split('').map((char, index) => {
      return (
        <p key={index} className="die-dot">
          {char}
        </p>
      );
    });
  };

  generateValue = () => {
    const randomNum = Math.floor(Math.random() * this.props.sides);
    this.setState({ value: randomNum + 1 });
  };

  componentDidMount() {
    this.generateValue();
  }
}

export default Dice;
