import React from "react";

const SortArticles = (props) => {
  return (
    <div className="sort-dropdown">
      <select
        className="dropdown-button"
        defaultValue="Sort"
        onChange={props.handleSort}
      >
        <option disabled value="Sort">
          Sort
        </option>
        <option value="created_at">Date</option>
        <option value="comment_count">Number of Comments</option>
        <option value="votes">Votes</option>
        <option value="topic">Topic</option>
      </select>
    </div>
  );
};

export default SortArticles;
