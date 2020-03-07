import React, { memo } from "react";
import "./card.scss";

export const Card = memo(props => {
  const { url, image, title, ingredients, lactose } = props;

  return (
    <div className="col-sm-12 col-md-6">
      <div className="card">
        <div className="card__image">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
          </a>
          {lactose && <div className="card__tag-lactose">Has Lactose</div>}
        </div>
        <div className="card__info-wrapper">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{ingredients}</p>
        </div>
      </div>
    </div>
  );
});
