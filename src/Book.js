import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
class Book extends Component {
  render() {
    return (
      <Carousel style={{
        width: "1000px",
        margin: ' 20px auto',
        height: "400px"
      }}>
        {this.props.books.map((b, index) => {
          return (
            <Carousel.Item >
              <img

                style={{ objectFit: "cover", height: "400px" }}
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
                <Badge bg="success" style={{ margin: "20px" }}>{b.email}</Badge>
                <Badge bg="success" width='200px' style={{ margin: "20px" }}>{b._id}</Badge>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
export default Book;
