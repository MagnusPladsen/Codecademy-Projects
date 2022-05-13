import logo from './logo.svg';
import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import Searchbar from '../SearchBar/SearchBar';
import { yelp } from '../../util/Yelp';


/* const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};
 */
/* 
const businesses = [
  business, business, business, business, business, business
];
 */

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  };
  render () {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <Searchbar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
  
}



export default App;
