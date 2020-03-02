import React from "react";
import "./form.scss";

export const Form = props => {
  const {
    searchIngredient,
    handleChangeIngredient,
    onSubmit,
    showErrorMessage
  } = props;

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-input">
        <label htmlFor="ingredient">Ingredients</label>
        <input
          name="ingredient"
          id="ingredient"
          type="text"
          placeholder="Onions, garlic..."
          value={searchIngredient}
          onChange={handleChangeIngredient}
        />
        <div className={`error-message`}>
          {showErrorMessage &&
            "Should be more than 3 characters and separate by coma."}
        </div>
      </div>
      <button className="button" name="button-submit" type="submit">
        Search
      </button>
    </form>
  );
};
