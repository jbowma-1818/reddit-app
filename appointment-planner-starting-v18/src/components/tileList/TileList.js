import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map(({name, ...rest}, index) => (
        <Tile 
          key={index}
          name={name} 
          description={rest}
        />
      ))}
    </div>
  );
};
