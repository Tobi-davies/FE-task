import React from "react";
import Card from "../card/card";

const CardList = ({ itemArray }) => {
  // console.log(itemArray.records);

  return (
    <div className="cardlist">
      {itemArray.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default CardList;
