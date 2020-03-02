import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Card } from "./card";
import { handleLactose, htmlDecode } from "../../components";

afterEach(cleanup);

const props = {
  id: 1,
  url: "url",
  image: "image",
  title: "title",
  ingredients: "eggs",
  lactose: false
};

describe("Card", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<Card {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should not show tag if there is not lactose", () => {
    const lactoseProps = {
      ...props,
      lactose: handleLactose(props.ingredients)
    };
    const { queryByText } = render(<Card {...lactoseProps} />);
    expect(queryByText("Has Lactose")).not.toBeInTheDocument();
  });

  it("should show tag if there is lactose", () => {
    const lactoseProps = { ...props, lactose: handleLactose("milk") };
    const { queryByText } = render(<Card {...lactoseProps} />);
    expect(queryByText("Has Lactose")).toBeInTheDocument();
  });

  it("should decode html entitity to correct title", () => {
    const entitityProps = { ...props, title: htmlDecode("Souffl&#233;") };
    const { queryByText } = render(<Card {...entitityProps} />);
    expect(queryByText("Souffl&#233;")).not.toBeInTheDocument();
    expect(queryByText("Soufflé")).toBeInTheDocument();
  });

  it("should show title and ingredients", () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText("title")).toBeInTheDocument();
    expect(getByText("eggs")).toBeInTheDocument();
  });
});
