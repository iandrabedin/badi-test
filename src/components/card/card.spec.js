import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Card } from "./card";

afterEach(cleanup);

const props = {
  id: 1,
  url: "url",
  image: "image",
  title: "title",
  ingredients: "eggs"
};

describe("Card", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<Card {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show title and ingredients", () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText("title")).toBeInTheDocument();
    expect(getByText("eggs")).toBeInTheDocument();
  });
});
