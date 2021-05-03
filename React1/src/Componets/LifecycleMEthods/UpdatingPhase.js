import React, { Component } from 'react'

export default class UpdatingPhase extends Component {
    constructor(props) {
        super(props)
    console.log("I am a Constructor")
        this.state = {
             name:"A2N"
        }
    }
      static getDerivedStateFromProps(){
          console.log("I am a getDerivedStateFromProps()")
      }
       shouldComponentUpdate(){
           console.log("I am a shouldComponentUpdate()")
           return true
       }
       getSnapshotBeforeUpdate(){
           console.log("I am getSnapshotBeforeUpdate()")
       }
       componentDidUpdate() {
           console.log("I am a componentDidUpdate")
       }
    
    render() {
        console.log("I am a Render()")
        return (
            <div>
                 <h4>{this.state.name}</h4>
                <button className="btn btn-warning" onClick={()=>{this.setState({
                    name:"A2N Academy"
                })}}>Update My state</button> 
            </div>
        )
    }
}
