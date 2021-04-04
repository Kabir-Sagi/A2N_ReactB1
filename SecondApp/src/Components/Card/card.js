import React from 'react'

class Card extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className="mt-3">

            <div className="card bg-dark text-white ">
                <div className="card-header">
                    <img src={this.props.image} width="100%" /> 
                </div>
                <div className="card-body"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus tempora laboriosam aut deserunt labore aliquam esse ea ducimus rem.</p></div>
                <div className="card-footer">{this.props.footer} Academy</div>
            </div>
        </div>
    }
}

export default Card