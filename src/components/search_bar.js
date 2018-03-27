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
            <div>
                <input
                    value={ this.state.term }
                    onChange={ event => this.setState({ term: event.target.value }) }
                />
            </div>
        );
    }

}

export default SearchBar;