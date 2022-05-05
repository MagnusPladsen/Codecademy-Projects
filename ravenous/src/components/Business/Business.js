// IMPORT
import React from 'react';
import './Business.css';


// OBJECT: Business
const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
}

class Business extends React.Component {
    render () {
        return (
            <div classname="Business">
                <div classname="image-container">
                    <img src='{business.imageSrc}' alt='Image of Pizza'/>
                </div>
                <h2>{business.name}</h2>
                <div classname="Business-information">
                    <div classname="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div classname="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 classname="rating">{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

// EXPORT
export default Business;