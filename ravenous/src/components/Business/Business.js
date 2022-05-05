// IMPORT
import React from 'react';

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
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                <h2>MarginOtto Pizzeria</h2>
                <div classname="Business-information">
                    <div classname="Business-address">
                        <p>1010 Paddington Way</p>
                        <p>Bordertown</p>
                        <p>NY 10101</p>
                    </div>
                    <div classname="Business-reviews">
                        <h3>ITALIAN</h3>
                        <h3 classname="rating">4.5 stars</h3>
                        <p>90 reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}