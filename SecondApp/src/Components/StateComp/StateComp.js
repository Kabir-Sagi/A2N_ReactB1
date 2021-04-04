import React from 'react'

 class StateComp extends React.Component{

    constructor(props){
           super(props)  
           this.state ={
               name:"Ayush",
               city:"Mumbai"
           }
        //   this.fn = this.fn.bind(this)
    }
       fn = () => {
        this.setState({
            name:this.props.name,
            city:this.props.city
        })

       }
      render() {
          return <div>
               <h4>{this.state.name}</h4>
               <h4>{this.state.city}</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, recusandae impedit aperiam nam minima ea iste necessitatibus autem accusamus omnis sint debitis voluptate! Consectetur a nobis, laboriosam repudiandae voluptate nulla magni modi officiis culpa expedita et veritatis tempora suscipit ratione?</p>
              <button className="btn btn-primary" onClick={this.fn}>Update</button>
          </div>
      }

 }

 export default StateComp