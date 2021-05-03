import React, { Component } from 'react'

export default class cr2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:true
        }
    }
    
    render() {
        let UI;
            if(this.state.loggedIn){
                UI=<div>Hello</div>
            } else {
                UI=<div>Welcome</div>
            }

        return (
            <div>
                {UI}     
            </div>
        )
    }
}
