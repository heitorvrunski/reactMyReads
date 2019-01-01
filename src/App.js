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
    BooksAPI.getAll()
      .then((books) => {
        this.setState((currentState) => ({
          books
        }))
      })
  }

  SetBookShelf = (book, shelf) => {
    const updatedBook = this.state.books
                        .filter(b => b.id === book.id);
    updatedBook[0].shelf = shelf;

    BooksAPI.update(book, shelf)
      .then((bookResult) => {
        this.setState((currentState) => ({
          books: currentState.books
          .filter(b => b.id !== updatedBook.id)
          .concat([updatedBook])
          }));
        });      
  };
  
  render() {

    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook goBack={() => {
            history.push('/')
          }}/>
        )} />
        <Route exact path='/' render={() => (
            <BookList books={this.state.books} 
                      SetBookShelf={this.SetBookShelf}
                      onNavigate={() => {
                        this.setState(() => ({
                          showSearchPage:true
                        }))
                      }} />
          )} />
      </div>
    )
  }
}

export default BooksApp
