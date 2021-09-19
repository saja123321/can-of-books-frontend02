import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';


class Book extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h2>{this.props.title}</h2>
            <ul>
              <li>{this.props.description}</li>
              <li>{this.props.status}</li>
                <li>{this.props.email}</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Book;
