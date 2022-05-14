import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water', id: 1},
        {name: 'Tiny Dancer2', artist: 'Elton John2', album: 'Madman Across The Water2', id: 2},
        {name: 'Tiny Dancer3', artist: 'Elton John3', album: 'Madman Across The Water3', id: 3},
      ]
    }
  }
  render () {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}; 

export default App;
