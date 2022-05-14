import React from 'react';
import './Track.css';

class Playlist extends React.Component {
    renderAction() {
      if (isRemoval.ok) {
        let action = '-';
      } else {
        let action = '+';
      }
    }
    render () {
      return (
        <div className="Track">
            <div className="Track-information">
                <h3><!-- track name will go here --></h3>
                <p><!-- track artist will go here--> | <!-- track album will go here --></p>
            </div>
        <button className="Track-action">{action}</button>
        </div>
      );
    }
};

export default Track;
  