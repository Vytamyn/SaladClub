import React from "react";
import "./search.css"; // Make sure your styles are correctly imported
import searchIcon from "../img/search.png";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
