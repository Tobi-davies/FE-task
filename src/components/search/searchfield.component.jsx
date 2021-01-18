import React from "react";
import "./searchfield.styles.css";

const SearchField = ({ updateSearchfield }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    updateSearchfield(e.target.value);
  };

  return (
    <div className="search-field">
      <div className="search">Search</div>
      <input type="text" onChange={inputHandler} id="" />
    </div>
  );
};

export default SearchField;
