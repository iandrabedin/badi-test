import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchRecipes } from "../../services";
import { Form, Loading } from "../../components";

const CardsList = lazy(() => import("../../components/cardsList"));

const Homepage = () => {
  // States
  const [recipes, setRecipes] = useState([]);
  const [searchIngredient, setSearchIngredient] = useState("");
  const [recentSearch, setRecentSearch] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  const handleRecentSearchDeleted = searchSelected => {
    setRecentSearch(recentSearch.filter(word => word !== searchSelected));
  };

  const handleRecentSearchSelected = searchSelected => {
    fetchRecipes(searchSelected).then(result => {
      setRecipes(result);
    });
  };

  const saveRecentSearch = search => {
    if (recentSearch.length === 5) {
      recentSearch.shift();
    }
    setRecentSearch([...recentSearch, search]);
  };

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
          saveRecentSearch(searchIngredient);
        } else {
          setRecipes([]);
          setShowEmptyMessage(true);
        }
      });
    } else {
      setShowErrorMessage(true);
    }
  };

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
        recentSearch={recentSearch}
        handleRecentSearchSelected={handleRecentSearchSelected}
        handleRecentSearchDeleted={handleRecentSearchDeleted}
      />
      <Suspense fallback={<Loading />}>
        <CardsList recipes={recipes} showEmptyMessage={showEmptyMessage} />
      </Suspense>
    </div>
  );
};

export default Homepage;
