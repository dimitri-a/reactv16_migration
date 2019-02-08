import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComp extends Component {

    constructor(props) {
        super(props)
       // this.state = { result: MyComp.multiplication(1),hello:props.hier }
        //debugger
    }
    componentDidMount() {
       // this.setState({ result: MyComp.multiplication(1) })
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     debugger
    //     if (prevState.hello===nextProps.hier) return null

       
    //   }

    static multiplication = (x) => {
        return x * 2
    }

    renderMult(b){
        if (b){
            return <div>{MyComp.multiplication(2)}</div>
        }
        else
        return  <div>{MyComp.multiplication(1)}</div>
    }

    render() {
        return (
            <div>
                {this.renderMult(this.props.hier)}
            </div>
        );
    }
}

export default MyComp;
