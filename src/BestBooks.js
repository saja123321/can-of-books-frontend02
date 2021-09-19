import React from "react";
import Book from './Book';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errorForBook: ''
    };
  }

  /* TODO(Done): Make a GET request to your API to fetch books for the logged in user  */

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const BOOK_KEY_PORT = process.env.REACT_APP_BACKEND_URL;
    const bookServer = `${BOOK_KEY_PORT}/books`;
    try {
      const res = await axios.get(bookServer);
      this.setState({ books: res.data });
    } catch (error) {
      this.setState({ errorForBook: true });
    }
  };

  

  render() {
    /* TODO(Done): render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
            this.props.books.map((b, index) => {
              return(
                <Book
                title={b.title}
                description={b.description}
                status={b.status}
                email={b.email}
                key={index}>
              </Book>


              )
            }
        
        )) : ( <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
