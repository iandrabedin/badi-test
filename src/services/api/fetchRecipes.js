import axios from "axios";

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";
export const url = "http://www.recipepuppy.com/api";

export const fetchRecipes = searchIngredient => {
  const configParams = {
    params: { i: searchIngredient }
  };

  return axios
    .get(`${proxyUrl}${url}`, configParams)
    .then(resolve)
    .catch(handleError);
};

const resolve = response => {
  return response.data.results;
};

const handleError = error => {
  throw new Error(`Could not fetch recipes: ${error}`);
};
