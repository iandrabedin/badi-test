import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Loading } from "./loading";

afterEach(cleanup);

describe("Loading", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have loading style", () => {
    const { getByText } = render(<Loading />);
    const loading = getByText("Loading...");
    expect(loading).toHaveClass("loading");
  });
});
