import { Button } from "flowbite-react";
import React from "react";
import Header from "./components/header";
import FavoriteProduct from "./products/favorite";

const Guest = () => {
  return (
    <div className="main">
      <Header />
      <FavoriteProduct />
    </div>
  );
};

export default Guest;
