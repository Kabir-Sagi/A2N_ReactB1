import React from 'react'

class FormComp extends React.Component{
    constructor(props){
          super(props)
    }
    Information = ()=>{
            this.nameRef=   this.refs.uname
           
            this.passwordRef=   this.refs.password
            this.emailRef=this.refs.email
            this.locationRef = this.refs.location
              console.log(this.nameRef.value)
              console.log(this.passwordRef.value)
              console.log(this.emailRef.value)
              console.log(this.locationRef.value)
                localStorage.setItem('uname',this.nameRef.value)
              this.nameRef.value =''
    }
     render(){
         return <div> 
                <h2 className="mb-4">Registration Form</h2>
                <p className="formgroup">
                    <input ref="uname" className="form-control" type="text" placeholder="Enter User Name" />
                </p>
                <p className="formgroup">
                    <input ref="password" className="form-control" type="password" placeholder="Enter Password" />
                </p>
                <p className="formgroup">
                    <input ref="email" className="form-control" type="text" placeholder="Enter Email Id" />
                </p>
                <p className="formgroup">
                    <input ref="location" className="form-control" type="text" placeholder="Enter Location" />
                </p>
                <button className="btn btn-primary" onClick={this.Information} >Submit</button>

         </div> 
     }

}
  export default FormComp