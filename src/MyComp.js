import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComp extends Component {

    constructor(props) {
        super(props)
        this.state = { result: 0 }
    }
    componentWillMount() {
        this.setState({ result: this.multiplication(1) })
    }
    componentWillReceiveProps() {
        debugger
        this.setState({ result: this.multiplication(2) })
    }

    multiplication = (x) => {
        return x * 2
    }

    render() {
        return (
            <div>
                {this.state.result}
            </div>
        );
    }
}

export default MyComp;
