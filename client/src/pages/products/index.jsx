import React from "react";
import { useState, useEffect } from "react";
import SearchProduct from "../components/searchProduct";
import AllProduct from "../components/allProduct";
import { SearchFavorite, SearchNormal } from "iconsax-react";

const Products = () => {
  const [query, setQuery] = useState();

  const onSearch = (e) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <form onSubmit={onSearch} className=" w-[80%] mt-10 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchNormal className="icons " />
            </div>
            <input
              type="text"
              id="default-search"
              className="block lowercase w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Cari Tema Favorite mu"
            />
          </div>
          <div className="text-white cursor-pointer absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"></div>
        </form>
        {query ? <SearchProduct query={query} /> : <AllProduct />}
      </div>
    </div>
  );
};

export default Products;
