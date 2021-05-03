import React from 'react'
import Child from './Child'

class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:"A2N",
            location:"Banglore"
        }
    }
      updateState = (childName,childlocation)=>{
          this.setState({name:childName,location:childlocation})
      }
     render(){
         return <div>
             <h4>Parent Component</h4>
             <p>{this.state.name}</p>
             <p>{this.state.location}</p>
             <Child parentFn = {this.updateState} />
         </div>
     }
}

export default Parent