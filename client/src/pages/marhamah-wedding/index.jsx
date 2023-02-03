import React from "react";
import { CountdownMonths } from "../components/countDown";
import FormDoa from "../components/formDoa";
import FormGift from "../components/formGift";

const Index = () => {
  return (
    <div>
      <FormDoa />
      <FormGift />
      {/* <CountdownMonths /> */}
    </div>
  );
};

export default Index;
