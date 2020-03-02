import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../../services";
import { CardsList } from "../../components";

const Homepage = () => {
  // States
  const [recipes, setRecipes] = useState([]);

  // Effects
  useEffect(() => {
    fetchRecipes().then(result => setRecipes(result));
  }, []);

  return (
    <div className="container">
      <h1>Recipe Puppy is an ingredient based recipe search</h1>
      <CardsList recipes={recipes} />
    </div>
  );
};

export default Homepage;
