import React from 'react'
import Axios from 'axios'

class AxiosComp extends React.Component {
   constructor(props) {
       super(props)
   
       this.state = {
            userInformation:[]
       }
   }
      getDataFromServer = ()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response.data)
                this.setState({
                    userInformation:response.data
                })
        },(error)=>{
            alert("Error While the the Response from server")
        })
      }
    render(){
        return <div className="container mt-3">
                 <div className="row">
                     <button className="btn btn-primary" onClick={this.getDataFromServer}>Click To Get Data From Server</button>
                 </div>
                   <div className="row mt-3">
                       {
                           this.state.userInformation.length > 0 ?
                              this.state.userInformation.map(function(element,index){
                                  return <div className="col-sm-3">
                                              <div className="card mt-3 ">
                                                  <div className="card-header bg-dark text-white">

                                                      <h4>User Information</h4>
                                                  </div>
                                                  <div className="card-body">
                                                <p>  <b>User Name:</b> {element.name}</p>
                                                  <p><b>Email Id:</b>{element.email}</p>
                                                  <p><b>Company Name</b>{element.company.name}</p>
                                                  </div>
                                              </div>

                                  </div>
                              })
                          : <h3 className="text-danger">Data is Not Avaliable</h3>
                       }
                   </div>

        </div>
    }
   


}

export default AxiosComp