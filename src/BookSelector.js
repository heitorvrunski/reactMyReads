import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookSelector extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        defaultShelf: PropTypes.string.isRequired,
        SetBookShelf: PropTypes.func.isRequired
    }

    state = {
        selection: this.props.defaultShelf
    }

    handleSelection = sel => {
        this.setState({ selection: sel });
        this.props.SetBookShelf(this.props.book, sel);
    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.selection} onChange={(event) => this.handleSelection(event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookSelector