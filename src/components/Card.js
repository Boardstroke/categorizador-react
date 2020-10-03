import React from "react";

const Card = ({ card, ...rest }) => {
  return (
    <article {...rest} className="card">
      <div className="thumbnail">
        <div className="layer"></div>
        <img src={card.image.nome} alt=""/>
        <div className="text">
          <h3>{card.titulo}</h3>
          <p>{card.descricao}</p>
        </div>
      </div>


    </article>
  );
};

export default Card;
