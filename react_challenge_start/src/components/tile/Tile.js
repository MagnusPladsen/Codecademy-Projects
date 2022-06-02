import React from "react";
import { Route } from "react-router";

export const Tile = (props) => {
  const values = Object.values(props.object);
  const keys = Object.keys(props.object);
  let i = 0;
  return (
    <div className="tile-container">
      {
        
        values.map(element => {
          if (typeof element === 'object') {
            return <p className="tile">{JSON.stringify(element)}</p>
          } else {
            i += 1;
            if (i === 1) {
              return <p className="tile-title">{element}</p>
            } else {
              return <p className="tile">{element}</p>
            }
          }
        })
      }
    </div>
  );
};
