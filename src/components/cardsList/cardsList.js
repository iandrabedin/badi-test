import React from "react";
import { Card } from "../../components";

export const CardsList = props => {
  const { recipes } = props;

  return (
    <div className="row">
      {recipes.map((recipe, index) => (
        <Card
          key={index}
          image={recipe.thumbnail}
          title={recipe.title}
          ingredients={recipe.ingredients}
          url={recipe.href}
        />
      ))}
    </div>
  );
};
