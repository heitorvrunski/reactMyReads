import React, { Component } from 'react'

class BookSelector extends Component {
    state = {
        selection: this.props.defaultShelf
    }

    handleSelection = sel => {       
        this.setState({ selection: sel});
        const book = {
            id: this.props.id
        }
        this.props.SetBookShelf(book, sel);
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