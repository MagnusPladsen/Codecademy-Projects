import logo from './logo.svg';
import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import Searchbar from '../SearchBar/SearchBar';

function App() {
  return (
    <div classname="App">
      <h1>ravenous</h1>
      <Searchbar />
      <BusinessList />
    </div>
  );
}

export default App;
