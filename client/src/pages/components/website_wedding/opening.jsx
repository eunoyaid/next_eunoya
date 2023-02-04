import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import React from "react";

const Opening = () => {
    const router = useRouter()
    const {name} = router.query

    const onClick = () => {
        // console.log('test')
        router.push('/marhamah-wedding/undangan')
    }

  return (
    <div className="bg-gray-300 absolute h-screen w-full">
      <div className="text-opening flex h-screen justify-center items-center flex-col">
        <p className="text-sm">the wedding of</p>
        <h1 className="nama-mempelai text-2xl">Jogn and Jeny</h1>
        <p className="mt-2">kepada yang terhormat</p>
        <p className="nama-undangan underline my-4"> {name}</p>
        <Button onClick={onClick} className="mt-5">Buka Undangan</Button>
      </div>
    </div>
  );
};

export default Opening;
