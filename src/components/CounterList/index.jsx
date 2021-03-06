import React, {Component} from 'react';
import Counter from '../Counter/index';
import '../../App.css';

class CounterList extends Component {
    render() {
        let counters = [];
        for (let index=0; index < this.props.counter; index++) {
            counters.push(<Counter />)
        }
        return (
            <div className="CounterList">{counters}</div>
        )
    }
}

export default CounterList;
