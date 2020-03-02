import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../../services";

const Homepage = () => {
  // States
  const [recipes, setRecipes] = useState([]);

  // Effects
  useEffect(() => {
    fetchRecipes().then(result => setRecipes(result));
  }, []);

  return (
    <div>
      <h1>Recipe Puppy is an ingredient based recipe search</h1>
      {recipes.map(recipe => (
        <div>
          <a href={recipe.href} target="_blank" rel="noopener noreferrer">
            <img src={recipe.thumbnail} alt={recipe.title} />
          </a>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
