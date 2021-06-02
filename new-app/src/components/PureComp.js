import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("___________________Pushpa Pure COmp_______________")
        return (
            <div>
               Pure Component {this.props.name} 
            </div>
        )
    }
}

export default PureComp
