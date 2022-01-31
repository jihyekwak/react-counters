import React, {Component} from 'react';
import Counter from './Counter';

class CounterList extends Component {
    render() {
        let counters = [];
        for (let index=0; index < this.props.counter; index++) {
            counters.push(<Counter />)
        }
        return (
            <div>{counters}</div>
        )
    }
}

export default CounterList;
