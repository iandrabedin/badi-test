import React from "react";
import { render, cleanup } from "@testing-library/react";
import { RecentSearch } from "./recentSearch";

afterEach(cleanup);

const props = {
  recentSearch: ["onions", "garlic"],
  handleRecentSearchHidden: jest.fn(),
  isRecentSearchHidden: false,
  handleRecentSearchSelected: jest.fn(),
  handleRecentSearchDeleted: jest.fn()
};

describe("RecentSearch", () => {
  it("should render as expected", () => {
    const { asFragment } = render(<RecentSearch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show a list with recent search", () => {
    const { getByText } = render(<RecentSearch {...props} />);
    expect(getByText("onions")).toBeInTheDocument();
  });

  it("should hide list when needed", () => {
    const hideProps = { ...props, isRecentSearchHidden: true };
    const { container } = render(<RecentSearch {...hideProps} />);
    expect(container.firstChild).toHaveClass("recent-search--hidden");
  });
});
