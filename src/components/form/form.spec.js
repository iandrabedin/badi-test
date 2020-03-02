import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Form } from "./form";

afterEach(cleanup);

const props = {
  searchIngredient: "milk",
  handleChangeIngredient: jest.fn(),
  onSubmit: jest.fn()
};

describe("Form", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<Form {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a submit button", () => {
    const { getByText } = render(<Form {...props} />);
    expect(getByText("Search")).toHaveAttribute("type", "submit");
  });

  it("should call submit function on click", () => {
    const onSubmit = jest.fn(e => e.preventDefault());
    const { getByText } = render(<Form {...props} onSubmit={onSubmit} />);
    fireEvent.click(getByText("Search"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
