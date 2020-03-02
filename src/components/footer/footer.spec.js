import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Footer } from "./footer";

afterEach(cleanup);

describe("Footer", () => {
  it("should render as expect", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the correct links", () => {
    const { getByText } = render(<Footer />);
    const reactLink = getByText("ReactJS");
    const apiLink = getByText("Recipe Puppy API");
    expect(reactLink).toHaveAttribute("href", "https://reactjs.org/");
    expect(apiLink).toHaveAttribute(
      "href",
      "http://www.recipepuppy.com/about/api/"
    );
  });
});
