import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchRecipes } from "../../services";
import { Form, Loading } from "../../components";

const CardsList = lazy(() => import("../../components/cardsList"));

const Homepage = () => {
  // States
  const [recipes, setRecipes] = useState([]);
  const [searchIngredient, setSearchIngredient] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  const handleChangeIngredient = e => {
    setSearchIngredient(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (searchIngredient.length > 3) {
      setShowErrorMessage(false);
      fetchRecipes(searchIngredient).then(result => {
        if (result.length > 0) {
          setRecipes(result);
          setShowEmptyMessage(false);
        } else {
          setRecipes([]);
          setShowEmptyMessage(true);
        }
      });
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
      <Suspense fallback={<Loading />}>
        <CardsList recipes={recipes} showEmptyMessage={showEmptyMessage} />
      </Suspense>
    </div>
  );
};

export default Homepage;
