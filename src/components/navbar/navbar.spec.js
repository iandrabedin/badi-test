import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Navbar } from "./navbar";

afterEach(cleanup);

describe("Navbar", () => {
  it("should render as expect", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
