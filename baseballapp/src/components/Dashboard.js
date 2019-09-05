
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

  render() {
    return (
        <div className='scoreboard'>
          <Display data={this.state} />
            <button onClick={this.IncrementStrike}>Strike</button>
            <button>Ball</button>
            <button>Fowl</button>
            <button>Hit</button>
        </div>
    )
  }
}
export default Dashboard;