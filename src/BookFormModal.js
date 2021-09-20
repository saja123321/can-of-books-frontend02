import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";

class BookFormModal extends Component {
  handleSubmit = (z) => {
    z.preventDefault();
    const bookData = {
      title: z.target.title.value,
      description: z.target.description.value,
      status: z.target.status.checked,
      email: z.target.email.value,
    };
    this.props.onCreate(bookData);
  };

  render() {
    return (
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
    );
  }
}

export default BookFormModal;
