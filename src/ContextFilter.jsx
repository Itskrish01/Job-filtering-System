import React, { createContext, useState } from "react";

export const ContextFilter = createContext();

const FilterProvider = ({ children }) => {
  const [filterItems, setFilterItems] = useState([]);

  const AddFilterItem = (item) => {
    if (filterItems.includes(item)) {
      return;
    } else {
      setFilterItems([...filterItems, item]);
    }
  };

  const removeFilterItem = (id) => {
    const newItems = filterItems.filter((item, idx) => idx !== id);
    setFilterItems(newItems);
  };

  const clearAllFilterItems = () => {
    setFilterItems([]);
  };

  const filterValue = {
    filterItems,
    AddFilterItem,
    removeFilterItem,
    setFilterItems,
    clearAllFilterItems,
  };

  return (
    <ContextFilter.Provider value={filterValue}>
      {children}
    </ContextFilter.Provider>
  );
};

export default FilterProvider;
