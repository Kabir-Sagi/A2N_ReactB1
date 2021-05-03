import React, { Component } from 'react'

export default class Cr4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             flag:false
        }
    }
    
    render() {
        return (
            <>
                {
                    this.state.flag && <div>Hello React</div>
                }
            </>
        )
    }
}
