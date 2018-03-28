import React, { Component } from 'react';

//a plain JS Object
//this is a Class-based Component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        //set the initial state of the component
        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={ this.state.term }
                    placeholder="search..."
                    onChange={ event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;