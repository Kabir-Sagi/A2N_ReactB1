import React, { Component } from 'react'

export default class Cr extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:true
        }
    }
    
    render() { 
          if(this.state.loggedIn){
              return <div>Hello am LoggedIn</div>
          } else{
      return (
            <div>
                Hello I am not LoggedIn 
            </div>
        )
          }
    }
}
