import React, { useState } from "react";
import "./form.scss";
import { RecentSearch } from "./components";

export const Form = props => {
  const {
    searchIngredient,
    handleChangeIngredient,
    onSubmit,
    showErrorMessage,
    recentSearch,
    handleRecentSearchSelected,
    handleRecentSearchDeleted
  } = props;
  const [isRecentSearchHidden, setRecentSearchHidden] = useState(true);

  const handleRecentSearchHidden = value => {
    setRecentSearchHidden(value);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__input-wrapper">
        <label htmlFor="ingredient" className="form__input-label">
          Ingredients
        </label>
        <input
          name="ingredient"
          id="ingredient"
          type="text"
          placeholder="Onions, garlic..."
          className="form__input"
          value={searchIngredient}
          onChange={handleChangeIngredient}
          onFocus={() => handleRecentSearchHidden(false)}
          onBlur={() => handleRecentSearchHidden(true)}
        />
        <div className="form__input--error-message">
          {showErrorMessage &&
            "Should be more than 3 characters and separate by coma."}
        </div>
        <RecentSearch
          recentSearch={recentSearch}
          handleRecentSearchSelected={handleRecentSearchSelected}
          handleRecentSearchDeleted={handleRecentSearchDeleted}
          handleRecentSearchHidden={handleRecentSearchHidden}
          isRecentSearchHidden={isRecentSearchHidden}
        />
      </div>
      <button className="button" name="button_submit" type="submit">
        Search
      </button>
    </form>
  );
};
