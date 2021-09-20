import axios from "axios";
import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
class BookFormModal extends Component {
  handleSubmit = (z) => {
    z.preventDefault();
    const bookData = {
      title: z.target.title.value,
      description: z.target.description.value,
      status: z.target.status.checked,
      email: z.target.email.value,
    };
    this.addBook(bookData)
    this.props.onHide()
  };
  addBook(bookData) {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/add-book`, bookData)
    this.props.updateData()
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="title" placeholder="Input book title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Input book description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Input your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Check type="checkbox" label="Read" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    );
  }
}
export default BookFormModal;
