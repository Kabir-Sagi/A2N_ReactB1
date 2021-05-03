import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class Home extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-dark bg-dark">
                  <a href="#" className="navbar-brand">React Routing application</a>
                  </nav> 
                  <div className="text-right">
                <Link to="/" className="mx-3 text-dark ">Home</Link>
                <Link to="/react" className="mx-3 text-dark ">React Js</Link>
                <Link to="/angular" className="mx-3 text-dark ">Angular </Link>
                <Link to="/bigdata" className="mx-3 text-dark ">BigData</Link>
                      </div> 
                      {/* <div className="mt-5">
                          <h2>Welcome to Home Component</h2>
                      </div> */}
            </div>
        )
    }
}
export default Home
