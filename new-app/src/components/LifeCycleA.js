import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Veekshith",
        }
        console.log("LifeCycleA console");
    }
    static getDerivedStateFromProps(props, state) {
        
        console.log("LifeCycleA getDrivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("LifeCycleA componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleA shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifeCycleA componentDidMount")
    }
    clickHandler = () =>{
        this.setState({name: "Pushpa"})
    }
    
    render() {
        console.log("LifeCycleA render");
        return (
            
            <div>
                LifeCycleA
                <button onClick={this.clickHandler}>ClickMe!!</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
