import React, { useRef, useState } from "react";
import { GlobalContext } from "../cntext";

const SearchForm = () => {
  const {setSearchTerm} = GlobalContext();
  const searchValue = useRef('');
  const searchHandle = () => {
    setSearchTerm(searchValue.current.value)
  }
  
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input ref={searchValue} onChange={searchHandle} type="text" name="name" id="name" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
