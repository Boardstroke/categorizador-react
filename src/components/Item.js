import React from "react";

const Item = ({ card, ...rest }) => {
  return (
    <div {...rest}>
      {card.titulo}
    </div>
  );
};

export default Item;
