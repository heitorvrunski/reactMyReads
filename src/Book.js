import React, { Component } from 'react'
import BookSelector from './BookSelector';

class Book extends Component {


    render() {

        const { id, title, authors, thumbnail, shelf , SetBookShelf } = this.props;
        return (
            <li key={id} >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail}})` }}></div>
                        <BookSelector id={id} defaultShelf={shelf} SetBookShelf={SetBookShelf} />
                    </div>
                    <div className="book-title">{title}</div>
                    {authors.map((author) => (
                        <div key={author} className="book-authors">{author}</div>
                    ))}

                </div>
            </li>
        )
    }
}

export default Book