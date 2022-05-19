import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      playlistName: 'New Playlist',
      playlistTracks: [
        {name: 'Enemies', artist: 'Nixis', album: 'Solo', id: '4', uri: ''},
        {name: 'Enemies2', artist: 'Nixis', album: 'Solo', id: '5', uri: ''},
        {name: 'Enemies3', artist: 'Nixis', album: 'Solo', id: '6', uri: ''},
      ],
      searchResults: [
        {name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water', id: '1', uri: ''},
        {name: 'Tiny Dancer2', artist: 'Elton John', album: 'Madman Across The Water', id: '2', uri: ''},
        {name: 'Tiny Dancer3', artist: 'Elton John', album: 'Madman Across The Water', id: '3', uri: ''},
      ],
    };
  };
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  };
  removeTrack(track) {
    let tracks = this.state.playlistTracks;   // Extrack playlist from state to variable
    for (let x = 0; x < tracks.length; x++) { // Go trough the playlist
      let extractTrack = tracks[x];           // Extrack one of the tracks in the playlist
      if (extractTrack === track) {           // If the track is in the playlist variable
        tracks.splice(extractTrack, 1)        // Remove the track from the playlist variable
      }
    }
    this.setState({ playlistTracks: tracks });// Update playlist state to what the playlist variable is
  };
  updatePlaylistName(name) {
    this.setState({ playlistName: name})      // Update the playlistname state to input name
  };
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName,trackURIs).then(() => {this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []}
    )});
  };
  search(term) {
    Spotify.search(term).then(searchResults => this.setState({searchResults}));
  };
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}; 

export default App;
