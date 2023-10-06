import React, { useEffect, useState } from "react";
import { useSearch } from "../context/searchContext";
import SearchIcon from "./searchIcon";

import "./index.css";

const SearchBox = () => {

  const [searchValue, setSearchValue] = useState(null);
  const { setSearch } = useSearch();

  const handleInputChange = (change) => {
    const { value } = change.target;
    setSearchValue(value);
  };

  useEffect(() => {
    setSearch(searchValue)
  }, [searchValue, setSearch]);



  return (
    <div className="search-box">
      <SearchIcon />
      <input
        type="text"
        placeholder="Busca en este sitio web"
        onChange={handleInputChange}
      />
    </div>
  );};

export default SearchBox;
