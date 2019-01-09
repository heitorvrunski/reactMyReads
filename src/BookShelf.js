import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = props => {

    function filterBookByShelf(books, shelf) {
        const result = books.filter((b) => {
            return b.shelf === shelf
        });
        return result;
    }

    const { shelfTitle, books, shelfType, SetBookShelf } = props;
    const bookShelf = filterBookByShelf(books, shelfType);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookShelf.map((book) => (
                        <Book key={book.id}
                            book={book}
                            SetBookShelf={SetBookShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )

}

BookShelf.propTypes = {
    books: PropTypes.object.isRequired,
    SetBookShelf: PropTypes.func.isRequired,
    shelfType: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired
}

export default BookShelf