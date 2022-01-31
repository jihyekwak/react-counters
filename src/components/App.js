import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';
import '../App.css';

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
        {/* <CounterList counter={this.props.data.counters} /> */}
        <CounterList counter={this.state.counters} />

      </div>
    )
  }
}

export default App;

