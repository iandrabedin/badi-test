import React from "react";
import { Card } from "../../components";
import { htmlDecode, handleLactose } from "../../utils";

export const CardsList = props => {
  const { recipes, showEmptyMessage } = props;

  return (
    <div className="row">
      {recipes.map((recipe, index) => (
        <Card
          key={index}
          image={recipe.thumbnail}
          title={htmlDecode(recipe.title)}
          ingredients={htmlDecode(recipe.ingredients)}
          lactose={handleLactose(recipe.ingredients)}
          url={recipe.href}
        />
      ))}
      {showEmptyMessage && (
        <p>No recipes were found with these ingredients. Try again.</p>
      )}
    </div>
  );
};
