import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    // get all books of user
    BooksAPI.getAll()
      .then((books) => {
        this.setState((currentState) => ({
          books
        }));
      });
  }

  SetBookShelf = (book, shelf) => {
    book.shelf = shelf;
    //update user book based on new shelf
    BooksAPI.update(book, shelf)
      .then((bookResult) => {
        this.setState((currentState) => ({
          books: currentState.books
            .filter(b => b.id !== book.id)
            .concat([book])
        }));
      });
  };

  render() {

    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook userBooks={this.state.books}
            SetBookShelf={this.SetBookShelf}
            goBack={() => {
              history.push('/')
            }}
          />
        )}
        />
        <Route exact path='/' render={() => (
          <BookList books={this.state.books}
            SetBookShelf={this.SetBookShelf}
            onNavigate={() => {
              this.setState(() => ({
                showSearchPage: true
              }))
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
