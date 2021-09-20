import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";

class Book extends Component {
  render() {
    return (
      <Carousel style={{ hight: "200px" }}>
        {this.props.books.map((b, index) => {
          return (
            <Carousel.Item interval={2000}>
              <img
                width="1000px"
                height="500px"
                style={{ objectFit: "contain" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/2890760.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <Badge bg="success">{b.title}</Badge>
                <p
                  style={{
                    width: "70%",
                    opacity: "0.7",
                    display: "block",
                    margin: "50px auto",
                    backgroundColor: "#FCF0C8",
                    color: "#630A10",
                  }}
                >
                  {b.description}
                </p>
                <Badge style={{ margin: "20px" }} bg="success">
                  {b.status}
                </Badge>
                <Badge bg="success">{b.email}</Badge>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Book;
