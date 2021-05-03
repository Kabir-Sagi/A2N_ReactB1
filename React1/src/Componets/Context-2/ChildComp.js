import React, { Component } from 'react'
import ctx from './CreateContext'

export default class ChildComp extends Component {
    render() {
        return (
            <div className="mt-3">
                {/* <ctx.Consumer>
                    {
                          (data)=>{
                          return data.length > 0 && <table className="table table-dark">
                              <tr>
                                  <th>ID</th>
                                  <th>NAME</th>
                                  <th>EMAIL</th>
                              </tr>
                               {
                                   data.map((userData,index)=>{
                                   return <tr>
                                       <td>{userData.id}</td>
                                       <td>{userData.name}</td>
                                       <td>{userData.email}</td>
                                   </tr>
                                   })
                               }
                          </table>
                          }

                    }
                    
                    </ctx.Consumer>  */}
                    <ctx.Consumer>
                        {
                            (data)=>{
                            return data.length > 0 && <table class="table table-primary">
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                </tr>
                               {
                                   data.map((d,i)=>{
                                     return <tr>
                                         <td>{d.id}</td>
                                         <td>{d.name}</td>
                                         <td>{d.email}</td>
                                     </tr>
                                   })
                               }
                            </table>
                            }
                        }
                    </ctx.Consumer>
            </div>
        )
    }
}
