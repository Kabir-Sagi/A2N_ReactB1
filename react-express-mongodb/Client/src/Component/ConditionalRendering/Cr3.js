import React, { Component } from 'react'

export default class Cr3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             flag:false
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.flag ?<div>Hello</div>:<div>Welcome</div>
                }
            </div>
        )
    }
}
