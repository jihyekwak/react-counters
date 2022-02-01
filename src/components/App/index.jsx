import React, { Component } from 'react';
import Header from '../Header/index';
import CounterList from '../CounterList/index';
import '../../App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: 5
    }
  }

  decreaseCounters = () => {
    let counters = this.state.counters - 1 ;
    this.setState({
      counters
    })
  }


  increaseCounters = () => {
    let counters = this.state.counters + 1 ;
    this.setState({
      counters
    })
  }
  render() {
    return (
      <div className='App'>
        <Header decreaseCounters={this.decreaseCounters} increaseCounters={this.increaseCounters}/>
        <h4>{this.props.data.counters}</h4>
        {/* <CounterList counter={this.props.data.counters} /> */}
        <CounterList counter={this.state.counters} />

      </div>
    )
  }
}

export default App;
