import React from "react";
import {Tile} from './../tile/Tile';

export const TileList = (props) => {
  const list = props.list;
  return (
    <div>
      {
        props.list.map((object, index) => 
          <Tile object={object} key={index} />
          )
      }
    </div>
  );
};
