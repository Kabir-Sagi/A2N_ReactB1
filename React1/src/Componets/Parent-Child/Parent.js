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
     render(){
         return <div>
             <h4>Parent Component</h4>
             <Child data={this.state} />
         </div>
     }
}

export default Parent