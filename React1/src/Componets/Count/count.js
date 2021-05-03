
import React, { Component } from 'react'

export default class count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
     upDateCountValue = ()=>{
        this.setState({count:this.state.count + 1})
     }
    
    render() {
        return (
            <div>
                <button className="btn btn-primary mt-3" onClick={this.upDateCountValue}>Clicked me {this.state.count} Times</button>
            </div>
        )
    }
}
