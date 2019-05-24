import React, { Component } from 'react';
import DicePage from './Dice';

class Homepage extends Component {
  state = { showDice: false, sides: 6 };
  render() {
    return (
      <div className="home-container">
        <h1 className="home-heading">ROLL THE DICE!</h1>
        <div className="dice-buttons">
          <button>How Many Dice?</button>
          <button>How Many Sides?</button>
        </div>
        <button onClick={this.rollDice} className="roll-button">
          ROLL THEM DICE!
        </button>
        {this.state.showDice && <DicePage sides={this.state.sides} />}
      </div>
    );
  }

  rollDice = () => {
    this.setState(prevState => {
      return { showDice: !prevState.showDice };
    });
  };
}

export default Homepage;
