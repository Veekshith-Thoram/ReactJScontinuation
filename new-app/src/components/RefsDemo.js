import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        //an old approach
        this.cbRef = React.createRef();
        this.setCbRef = (element) =>{
            this.cbRef = element;
        }
    }
    componentDidMount(){
        if(this.cbRef) {
            this.cbRef.focus();
        }
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    clickHandler = () =>{
        alert(this.cbRef.value)
        alert(this.inputRef.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
