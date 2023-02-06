import React from "react";
import { CountdownMonths } from "../components/countDown";
import FormDoa from "../components/formDoa";
import FormGift from "../components/formGift";
import Map from "../components/website_wedding/map";
import ListDoa from "../components/website_wedding/listDoa";
import Tabbar from "../components/website_wedding/tabbar";
import Galleries from "../components/website_wedding/galleries";

const Undangan = () => {
  return (
    <div className="main w-full">
      <Tabbar />
      <FormGift />
      <FormDoa />
      <ListDoa />
      <Galleries />
      <CountdownMonths />
      <Map />
    </div>
  );
};

export default Undangan;
