import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Form } from "./form";

afterEach(cleanup);

const props = {
  searchIngredient: ["milk"],
  handleChangeIngredient: jest.fn(),
  onSubmit: jest.fn(),
  showErrorMessage: false,
  recentSearch: [],
  handleRecentSearchSelected: jest.fn(),
  handleRecentSearchDeleted: jest.fn()
};

describe("Form", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<Form {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have correct ingredient search input", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Form {...props} handleChangeIngredient={onChange} />
    );
    const input = getByLabelText("Ingredients");
    expect(input.value).toBe("milk");
    fireEvent.change(input, { target: { value: "onions, garlic" } });
    expect(onChange).toHaveBeenCalledTimes(1);
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

  it("should show error message", () => {
    const errorProps = { ...props, showErrorMessage: true };
    const { getByText } = render(<Form {...errorProps} />);
    expect(
      getByText("Should be more than 3 characters and separate by coma.")
    ).toBeInTheDocument();
  });
});
