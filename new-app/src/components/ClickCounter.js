import React, { Component } from 'react'
import withComponent from './withComponent';
class ClickCounter extends Component {
    
    render() {
        const {count, incrementCount} = this.props
        if(count === 15){
            throw new Error("You reached the maximum limit")
        }
        return (
            
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default withComponent(ClickCounter)
