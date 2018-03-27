import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './config';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


//App Component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({ videos }); //{ videos: videos } before ES6
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                {/* videos is a react prop */}
                <VideoList videos={ this.state.videos }/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));