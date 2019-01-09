import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBook extends Component {
    static propTypes = {
        userBooks: PropTypes.object.isRequired,
        SetBookShelf: PropTypes.func.isRequired
    }

    state = {
        books: [],
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        if (query !== '') {
            BooksAPI.search(query)
                .then((books) => {
                    if (!books.error && books.length > 0) {
                        // set book shelf based on user books
                        books.forEach(bookSearch => {
                            const match = this.props.userBooks.filter(b => b.id === bookSearch.id);
                            (match[0]) ? (bookSearch.shelf = match[0].shelf) : (bookSearch.shelf = "none");
                        });
                        this.setState(() => ({
                            books: books
                        }))
                    }
                    else {
                        this.clearBooks();
                    }
                })
        }
        else {
            this.clearBooks();
        }
    }

    clearBooks = () => {
        this.setState(() => ({
            books: []
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        const { SetBookShelf, goBack } = this.props;
        const { books, query } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={goBack}>Close</button>
                    <div className="search-books-input-wrapper">                        
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                            value={query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books && books.map((b) => (
                            <Book key={b.id}
                                book={b}
                                SetBookShelf={SetBookShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook