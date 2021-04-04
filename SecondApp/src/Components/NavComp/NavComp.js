import React from 'react'
import './NavComp.css'

class NavComp extends React.Component {
    constructor(){
        super()
    }

    render(){
     return <div>
          <nav className="nav navbar-dark bg-warning">
            <a href="#" className="navbar-brand">A2N</a>  
          </nav>
          
     </div>
    }

}

export default NavComp