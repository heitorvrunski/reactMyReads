import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BookList extends Component {
    render () {
        const { books, SetBookShelf } = this.props;
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>                  
                  <BookShelf 
                    shelfTitle={'Currently Reading'} 
                    books={books} 
                    shelfType='currentlyReading' 
                    SetBookShelf={SetBookShelf} />
                  <BookShelf 
                    shelfTitle={'Want To Read'} 
                    books={books} 
                    shelfType='wantToRead' 
                    SetBookShelf={SetBookShelf} />
                  <BookShelf 
                    shelfTitle={'Read'} 
                    books={books} 
                    shelfType='read' 
                    SetBookShelf={SetBookShelf} />
                </div>
              </div>
              {/* <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div> */}
              <div className='open-search'>
                    <Link to='/search'>
                    <button></button>
                    </Link>
              </div>
            </div>
        )
    }
}

export default BookList