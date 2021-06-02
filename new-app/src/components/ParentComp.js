import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Veekshith"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name: "Pushpa"})  
        }, 2000)
    }
    
    render() {
        console.log("_____________Pushpa Parent Comp__________")
        return (
            <div>
                Parent Component
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />               
            </div>
        )
    }
}

export default ParentComp
