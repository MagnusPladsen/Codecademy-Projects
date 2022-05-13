const apiKey = '6wgZJWuDYmebY87iBdPIzCQtXBUfvlnmDCPWoTbIiqdccocXllwneGytNaS85fgnID34XIVVmfKrLvR6n1ghT2F8mOQ7VLwZ8Snw7B5RcCCv6xVGrRkpmc7kXnp-YnYx';

export const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
              return jsonResponse.businesses.map((business) => {
                  return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.sate,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }

              });
            }
        });
    }
}
