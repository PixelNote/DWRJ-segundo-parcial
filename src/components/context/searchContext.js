import React, { createContext, useState, useContext } from "react";

export const searchContext = createContext(null);

export function useSearch() {
  return useContext(searchContext);
}

export const SearchProvider = ({ children }) => {

  const [search, setSearch] = useState(null);


  const value = {
    search,
    setSearch
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
};