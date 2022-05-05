import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return sortByOptions.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li key={sortByOptionValue}>{sortByOption}</li>
            );
        });
    };
    render () {
        return (
            <div classname="SearchBar">
                <div classname="SearchBar-sort-options">
                    <ul>
                        {SearchBar.renderSortByOptions()}
                    </ul>
                </div>
                <div classname="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div classname="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    };
};

export default SearchBar;