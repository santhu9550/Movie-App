import React, { useState } from "react";
import { searchMovies } from "../Redux-State/actions/MovieAction";
import {useDispatch} from "react-redux";

export default function MovieSearch() {
    const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  
    // @@search-Handler
    // @desc: submits search-Input value and makes api request
  const searchHandler = (event) => {
    event.preventDefault();
    if(!searchInput){
      alert("Please Enter Atleast One Word!")
    }
    else{
      dispatch(searchMovies(searchInput));
    setSearchInput("");
    }
  };

  return (
    <div className="MovieSearch">
      <form onSubmit={searchHandler} className="form">
        <label htmlFor="searchInput" className="label">
          Movie Name:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="searchInput"
          placeholder="Search Movie"
          onChange={event => setSearchInput(event.target.value)}
          value={searchInput}
        />
        <button type="submit" className="button">
          Search!
        </button>
      </form>
    </div>
  );
}
