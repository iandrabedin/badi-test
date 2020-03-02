import React from "react";
import "./card.scss";

export const Card = props => {
  const { url, image, title, ingredients } = props;

  return (
    <div className="col-sm-12 col-md-6">
      <div className="card">
        <div className="image">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
          </a>
        </div>
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="ingredients">{ingredients}</p>
        </div>
      </div>
    </div>
  );
};
