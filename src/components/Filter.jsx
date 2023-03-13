import React, { useContext } from "react";
import { ContextFilter } from "../ContextFilter";
import CrossIcon from "/images/icon-remove.svg";

const Filter = () => {
  const { filterItems, clearAllFilterItems, removeFilterItem } =
    useContext(ContextFilter);

  return (
    <div
      className={`z-10 filter-card flex items-center justify-between px-10 py-6 bg-white rounded ${
        filterItems.length !== 0 ? "" : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-4">
        {filterItems.length !== 0 &&
          filterItems.map((item, idx) => (
            <div key={idx} className="flex">
              <div className="px-3 py-1 bg-[#e3f4f2] rounded-l-md text-[#68a39d]">
                {item}
              </div>
              <img
                src={CrossIcon}
                alt="icon"
                onClick={() => removeFilterItem(idx)}
                className="h-full cursor-pointer hover:bg-[#293939] transition bg-[#68a39d] p-[9px] rounded-r-md"
              />
            </div>
          ))}
      </div>
      <div
        onClick={clearAllFilterItems}
        className="text-[#68a39d] cursor-pointer underline"
      >
        <p>Clear filter</p>
      </div>
    </div>
  );
};

export default Filter;
