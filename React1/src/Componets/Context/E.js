import React, { Component } from 'react'
import ctx from './createContext'

export default class E extends Component {
    render() {
        return (
            <div className="mt-5">
               <h2>My Name is:
                 <ctx.Consumer>
                    {

                        (data)=>{
                      return <span>{data}</span>
                        }
                    } 
                     
                     
                     </ctx.Consumer>   
                   
                   
                   
                   
                   </h2> 
            </div>
        )
    }
}
