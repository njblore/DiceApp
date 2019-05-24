import React, { Component } from 'react';
import DicePage from './Dice';

class Homepage extends Component {
  state = { showDice: false, sides: 6, showHowMany: false, dice: ['purple'] };
  render() {
    return (
      <div className="home-container">
        <h1 className="home-heading">ROLL THE DICE!</h1>
        <div className="dice-buttons">
          <div>
            <button onClick={this.showHowMany}>How Many Dice?</button>
            {this.state.showHowMany && (
              <div className="dropdown dice-selector">
                <button onClick={this.setDice}>1</button>
                <button onClick={this.setDice}>2</button>
                <button onClick={this.setDice}>3</button>
                <button onClick={this.setDice}>4</button>
              </div>
            )}
            <p>{this.state.dice.length}</p>
          </div>
          <button>How Many Sides?</button>
        </div>
        <button onClick={this.rollDice} className="roll-button">
          ROLL THEM DICE!
        </button>
        {this.state.showDice && (
          <div>
            {this.state.dice.map((colour, index) => {
              return (
                <DicePage
                  key={index}
                  sides={this.state.sides}
                  colour={colour}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  setDice = e => {
    const diceArrays = {
      1: ['pink'],
      2: ['yellow', 'blue'],
      3: ['green', 'orange', 'blue'],
      4: ['pink', 'green', 'orange', 'blue'],
    };
    this.setState({ dice: diceArrays[e.target.innerText], showHowMany: false });
  };

  showHowMany = () => {
    this.setState(prevState => {
      return { showHowMany: !prevState.showHowMany };
    });
  };

  rollDice = () => {
    this.setState(prevState => {
      return { showDice: !prevState.showDice };
    });
  };
}

export default Homepage;
