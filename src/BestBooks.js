import React from "react";
import Book from "./Book";
import axios from "axios";
import BookFormModal from "./BookFormModal";
import AddBookButton from "./AddBookButton";

const BOOK_KEY_PORT = process.env.REACT_APP_BACKEND_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookFormModal: false,
    };
  }

  showBookFormModalHandler = () => {
    this.setState({
      showBookFormModal: true,
    });
  };

  /* TODO(Done): Make a GET request to your API to fetch books for the logged in user  */

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const bookServer = `${BOOK_KEY_PORT}/books`;
    try {
      const res = await axios.get(bookServer);
      this.setState({ books: res.data });
    } catch (error) {
      console.log(errorForBook);
    }
  };

  handleCreateNewBook = async (bookData) => {
    const bookServer = `${BOOK_KEY_PORT}/books`;
    const res = await axios.post(bookServer, bookData);
    const newBook = res.data;
    const books = [...this.state.books, newBook];
    this.setState({ books });
  };

  render() {
    /* TODO(Done): render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Book books={this.state.books} />
        ) : (
          <h3>No Books Found </h3>
        )}
      </>
    );
  }
}

export default BestBooks;
