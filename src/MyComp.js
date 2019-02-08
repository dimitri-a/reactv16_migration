import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComp extends Component {

    constructor(props) {
        super(props)
        this.state = { result: MyComp.multiplication(1),hello:props.hier }
        debugger
    }
    componentDidMount() {
        this.setState({ result: MyComp.multiplication(1) })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        debugger
        if (prevState.hello===nextProps.hier) return null

        return {
          result: MyComp.multiplication(2),
        };
      }

    static multiplication = (x) => {
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
