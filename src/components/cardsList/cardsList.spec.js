import React from "react";
import { render, cleanup } from "@testing-library/react";
import { CardsList } from "./cardsList";

afterEach(cleanup);

const props = {
  recipes: [
    {
      title: "recipe title",
      href: "href",
      ingredients: "potato, cheese",
      thumbnail: "thumbnail.jpg"
    }
  ]
};

describe("CardsList", () => {
  it("should render as expect", () => {
    const { asFragment } = render(<CardsList {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show recipes", () => {
    const { getByText } = render(<CardsList {...props} />);
    const recipeTitle = getByText("recipe title");
    expect(recipeTitle).toBeInTheDocument();
  });
});
