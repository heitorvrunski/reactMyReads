import React from 'react'
import BookSelector from './BookSelector';
import PropTypes from 'prop-types'

const Book = props => {


    const { book, SetBookShelf } = props;
    return (
        <li key={book.id} >
            <div className="book">
                <div className="book-top">
                    {book.imageLinks && (
                        <div className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail}})`
                            }}>
                        </div>)}
                    <BookSelector book={book}
                        defaultShelf={book.shelf}
                        SetBookShelf={SetBookShelf}
                    />
                </div>
                <div className="book-title">
                    {book.title}
                </div>
                {book.authors && book.authors.map((author) => (
                    <div key={author}
                        className="book-authors">
                        {author}
                    </div>
                ))}

            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    SetBookShelf: PropTypes.func.isRequired
}

export default Book