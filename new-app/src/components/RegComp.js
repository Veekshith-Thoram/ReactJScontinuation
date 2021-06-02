import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log("___________Pushpa Reg Comp_____________")
        return (
            <div>
                Regular Component {this.props.name}                
            </div>
        )
    }
}

export default RegComp
