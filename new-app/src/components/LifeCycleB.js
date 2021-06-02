import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Veekshith",
        }
        console.log("LifeCycleB console");
    }
    static getDerivedStateFromProps(props, state) {
        
        console.log("LifeCycleB getDrivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("LifeCycleB componentDidMount");
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleB shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifeCycleB componentDidMount")
    }
    
    render() {
        console.log("LifeCycleB render");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
