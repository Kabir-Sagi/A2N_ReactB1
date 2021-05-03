import React, { Component } from 'react'
import B from './B'
import ctx from './createContext'

export default class A extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
          
    }
    fn = ()=>{
        this.setState({
            name:"Kabir"
        })
    }
    
    render() {
        return (
            <div className="mt-4">
                 <button className="btn btn-warning" onClick={this.fn}>Click ME</button>
                 <ctx.Provider value={this.state.name}>
                <B  />
                </ctx.Provider>
            </div>
        )
    }
}
