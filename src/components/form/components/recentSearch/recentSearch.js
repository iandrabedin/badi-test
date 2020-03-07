import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./recentSearch.scss";

export const RecentSearch = props => {
  const {
    recentSearch,
    handleRecentSearchHidden,
    isRecentSearchHidden,
    handleRecentSearchSelected,
    handleRecentSearchDeleted
  } = props;

  return (
    <ul
      onFocus={() => handleRecentSearchHidden(false)}
      className={`recent-search  ${(isRecentSearchHidden ||
        !recentSearch.length) &&
        "recent-search--hidden"}`}
    >
      {recentSearch.map((search, index) => (
        <li key={index} className="recent-search__list">
          <div
            onClick={() => handleRecentSearchSelected(search)}
            className="recent-search__search"
          >
            {search}
          </div>
          <div
            onClick={() => handleRecentSearchDeleted(search)}
            className="recent-search__delete"
          >
            <IoIosCloseCircle />
          </div>
        </li>
      ))}
    </ul>
  );
};
