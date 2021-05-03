import React, { Component } from 'react'

 class Child extends Component {
     constructor(props) {
         super(props)
     this.state = {
         name:"Kabir",
         location:"Hyderabad"
     }
        
     }
     childFn = () =>{
     this.props.parentFn(this.state.name,this.state.location)
     }
     
    render() {
        return (
            <div>
                 <h4>Child Component</h4>
                 <button className="btn btn-primary" onClick={this.childFn}>Change the Data</button>
                
            </div>
        )
    }
}
export default Child
