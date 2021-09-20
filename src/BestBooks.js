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
      flage: false,
      delId: ''
    };
  }
  /* TODO(Done): Make a GET request to your API to fetch books for the logged in user  */



  getBooks = async () => {
    const bookServer = `${BOOK_KEY_PORT}/books`;
    try {
      const res = await axios.get(bookServer);
      this.setState({ books: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  onButtonClick = () => {
    this.setState({
      flag: true
    })
  }
  closeModal = () => {
    this.setState({
      flag: false
    })
  }
  updateData = () => {
    this.getBooks();

  }
  deleatOne = (item) => {

    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/del-book/${item}`)
    this.getBooks();
  }

  render() {
    /* TODO(Done): render user's books in a Carousel */
    this.getBooks();

    return (

      <div  >
        <BookFormModal show={this.state.flag} onHide={this.closeModal} updateData={this.updateData} />
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Book books={this.state.books} />
        ) : (
          <h3>No Books Found </h3>
        )}
        <AddBookButton onClick={this.onButtonClick} delet={this.deleatOne} updateData={this.updateData} />

      </div>
    );
  }
}
export default BestBooks;
