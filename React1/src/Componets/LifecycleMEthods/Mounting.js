import React from 'react'

class Mounting extends React.Component{

    constructor(){
        super()
        console.log("1. I am a Constructor")
    }
      
      componentDidMount(){
          console.log("4. I am ComponentDidMount")
      }
      render(){
          console.log("3. I am Render Method")
          return <div>
              <h2>Welcome to Life cycle Methods</h2>
          </div>
      }
      static getDerivedStateFromProps(){
        console.log("2. I am getDerivedStateFromProps ")
    }

}
export default Mounting