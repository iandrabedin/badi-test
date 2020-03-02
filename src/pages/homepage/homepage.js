import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../../services";
import { Form, CardsList } from "../../components";

const Homepage = () => {
  // States
  const [recipes, setRecipes] = useState([]);
  const [searchIngredient, setSearchIngredient] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChangeIngredient = e => {
    setSearchIngredient(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (searchIngredient.length > 3) {
      fetchRecipes(searchIngredient).then(result => setRecipes(result));
    } else {
      setShowErrorMessage(true);
    }
  };

  // Effects
  useEffect(() => {
    fetchRecipes().then(result => setRecipes(result));
  }, []);

  return (
    <div className="container">
      <h1>Recipe Puppy is an ingredient based recipe search</h1>
      <Form
        onSubmit={onSubmit}
        showErrorMessage={showErrorMessage}
        searchIngredient={searchIngredient}
        handleChangeIngredient={handleChangeIngredient}
      />
      <CardsList recipes={recipes} />
    </div>
  );
};

export default Homepage;
