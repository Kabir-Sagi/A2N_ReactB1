import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class Card1 extends Component {
    constructor(props) {
        super(props)
    
       
    }
    
    render() {
        return (
            <div className="mt-3 container">
                <Card>
  <Card.Header>{this.props.title}</Card.Header>
  <Card.Body className="bg-dark text-white">
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
          Pressent by {this.props.name}
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            </div>
        )
    }
}
