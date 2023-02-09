import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CountdownMonths } from "../components/countDown";
import FormDoa from "../components/formDoa";
import FormGift from "../components/formGift";
import Map from "../components/website_wedding/map";
import ListDoa from "../components/website_wedding/listDoa";
import Tabbar from "../components/website_wedding/tabbar";
import Galleries from "../components/website_wedding/galleries";
import MusicButton from "../components/musicButton";
import { useState } from "react";

const Index = () => {
  const [opening, setOpening] = useState(true);
  const router = useRouter();
  const { nama } = router.query;

  const onClick = () => {
    setOpening(false);
  };

  return (
    <>
      {opening ? (
        <div className="bg-gray-300 fixed h-screen w-full">
          <div className="text-opening flex h-screen justify-center items-center flex-col">
            <p className="text-sm">the wedding of</p>
            <h1 className="nama-mempelai text-2xl">Jogn and Jeny</h1>
            <p className="mt-2">kepada yang terhormat</p>
            <p className="nama-undangan underline my-4">
              {" "}
              {nama ? nama : "tidak ada"}
            </p>
        
            <Button onClick={onClick} className="mt-5">
              Buka Undangan
            </Button>
          </div>
        </div>
      ) : (
        <div className="main">
          {/* <Tabbar /> */}
          <MusicButton />
          <FormGift />
          <FormDoa />
          <ListDoa />
          <Galleries />
          <CountdownMonths />
          <Map />
        </div>
      )}
    </>
  );
};

export default Index;
