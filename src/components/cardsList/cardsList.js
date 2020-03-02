import React from "react";
import { Card } from "../../components";

// Check if the recipe have ingredient with lactose
export const handleLactose = ingredient => {
  if (ingredient.includes("milk") || ingredient.includes("cheese")) {
    return true;
  } else {
    return false;
  }
};

// Format HTML entities to characters
export const htmlDecode = text => {
  var doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

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
