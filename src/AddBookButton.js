import React, { Component } from "react";

import { Button } from "react-bootstrap";

class AddBookButton extends Component {
  render() {
    return (
      <Button variant="secondary" size="lg" onClick={this.props.onButtonClick}>
        New Book
      </Button>
    );
  }
}

export default AddBookButton;
