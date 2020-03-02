import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./app";

afterEach(cleanup);

describe("App", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
