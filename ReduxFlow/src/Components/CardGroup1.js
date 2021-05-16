import React, { Component } from 'react'
import {CardGroup,Card} from 'react-bootstrap'

export default class CardGroup1 extends Component {
    render() {
        return (
            <div className="container my-3">
                <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://wallpaperaccess.com/full/3949080.png" />
    <Card.Body>
      <Card.Title>React Js</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.zqFGWFw-B0YtGiqbUPaeoQHaEK?w=301&h=180&c=7&o=5&dpr=1.5&pid=1.7" />
    <Card.Body>
      <Card.Title>Angular</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.lRN5NWlupv77mYy8jtGHwQHaD4?w=343&h=180&c=7&o=5&dpr=1.5&pid=1.7" />
    <Card.Body>
      <Card.Title>Spring Boot</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
        )
    }
}
