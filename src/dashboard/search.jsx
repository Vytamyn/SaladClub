import React from "react";
import "./search.css";
import searchIcon from "../img/search.png";
import SearchBar from "../assets/searchBar";

function Search() {
  return (
    <div className="topBar">
      <SearchBar />
      <p className="status">Today's status:</p>
      <button className="button-bordered">Export CVS</button>
    </div>
  );
}

export default Search;
