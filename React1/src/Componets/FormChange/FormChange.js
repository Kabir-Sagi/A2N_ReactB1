import React from 'react'

class FormChange extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            name:'' ,
            password:'',
            email:'',
            location:''
        }
    }
      Information = ()=>{
        //   console.log(this.state.name)
        //   console.log(this.state.password)
        //   console.log(this.state.email)
        //   console.log(this.state.location)
        var nameRef=  this.refs.name
         var passwordRef = this.refs.pwd
         var emailIdRef = this.refs.emailid 
         var locationRef= this.refs.city
           nameRef.innerHTML = this.state.name 
           passwordRef.innerHTML = this.state.password
           emailIdRef.innerHTML = this.state.email
           locationRef.innerHTML = this.state.location
      }
      render(){
          return <div> 
          <h2 className="mb-4">Registration Form</h2>
          <p className="formgroup">
              <input onChange={(event)=>{this.setState({name:event.target.value})}} ref="uname" className="form-control" type="text" placeholder="Enter User Name" />
          </p>
          <p className="formgroup">
              <input onChange={(event)=>{ this.setState({password:event.target.value})}} ref="password" className="form-control" type="password" placeholder="Enter Password" />
          </p>
          <p className="formgroup">
              <input onChange={(event)=>{ this.setState({email:event.target.value})}} ref="email" className="form-control" type="text" placeholder="Enter Email Id" />
          </p>
          <p className="formgroup">
              <input onChange={(event)=>{ this.setState({location:event.target.value})}} ref="location" className="form-control" type="text" placeholder="Enter Location" />
          </p>
          <button className="btn btn-primary" onClick={this.Information} >Submit</button>
          <h2 ref="name"></h2>
          <h2 ref="pwd"></h2>
          <h2 ref="emailid"></h2>
          <h2 ref="city"></h2>
   </div> 
      }

}

export default FormChange