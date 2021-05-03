import React, { Component } from 'react'
import ctx from './CreateContext'
import ChildComp from './ChildComp'

export default class GetData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data:[]  
        }
    }
    getDataFromServer =()=>{
        fetch("http://jsonplaceholder.typicode.com/users").then((data)=>{
           return data.json()
        }).then((res)=>{
            console.log(res)
            this.setState({
                data:res
            })
        },(err)=>{
           console.log(err)
        })
    }

    
    render() {
        return (
            <div className="mt-4">
                 <button className="btn btn-secondary" onClick={this.getDataFromServer}>Get Data</button>
              <ctx.Provider value={this.state.data}>
                 <ChildComp />
              </ctx.Provider>
            </div>
        )
    }
}
