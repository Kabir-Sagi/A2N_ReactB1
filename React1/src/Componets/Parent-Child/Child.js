import React, { Component } from 'react'

 class Child extends Component {
     constructor(props) {
         super(props)
     
        
     }
     
    render() {
        return (
            <div>
                 <h4>Child Component</h4>
                 <p>{this.props.data.name}</p>
                 <p>{this.props.data.location}</p>
            </div>
        )
    }
}
export default Child
