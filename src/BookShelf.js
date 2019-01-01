import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

    filterBookByShelf = (books, shelf) => {
        const result = books.filter((b) => {
          return b.shelf === shelf
        })
        return result;
      }

    render() {

        const {shelfTitle, books, shelfType, SetBookShelf } = this.props;
        const bookShelf = this.filterBookByShelf(books, shelfType);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookShelf.map((book) => (
                            <Book 
                                key={book.id} 
                                id={book.id} 
                                title={book.tile} 
                                authors={book.authors} 
                                thumbnail={book.imageLinks.thumbnail}
                                shelf={book.shelf}
                                SetBookShelf={SetBookShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf