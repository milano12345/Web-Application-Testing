
import React, { Component } from 'react';
import Display from './Display'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      fowls: 0,
      hits: 0
    };
  }

  IncrementStrike = () => {
    if(this.state.strikes < 3){
    this.setState({ strikes: this.state.strikes + 1 });
  } else if(this.state.strikes === 3) {
    this.setState({ strikes: 0})
  }
}

IncrementBall = () => {
  if(this.state.balls < 4){
  this.setState({ balls: this.state.balls + 1 });
} else if(this.state.balls === 4) {
  this.setState({ balls: 0})
  }
}

IncrementFowl = () => {
  if(this.state.strikes < 2){
  this.setState({ strikes: this.state.strikes + 1, fowls: this.state.fowls + 1 });
} }

IncrementHit = () => {
  this.setState({strikes: 0, balls: 0, fowls: 0, hits: this.state.hits + 1})
}


  render() {
    return (
        <div className='scoreboard'>
          <Display data={this.state} />
            <button onClick={this.IncrementStrike}>Strike</button>
            <button onClick={this.IncrementBall}>Ball</button>
            <button onClick={this.IncrementFowl}>Fowl</button>
            <button onClick={this.IncrementHit}>Hit</button>
        </div>
    )
  }
}
export default Dashboard;