import { BagTick, BagTick2, Check } from "iconsax-react";
import Image from "next/image";
import React from "react";
import CustomButton from "@/pages/components/utils/customButton";
import Link from "next/link";

const Sucess = () => {
  return (
    <div className="container h-screen flex flex-col items-center justify-center">
      <div className="bg-secondary mx-auto w-52 h-52 rounded-full flex items-center justify-center">
        <BagTick2 className="text-primary h-16 w-16" />
      </div>
      <p className="capitalize text-md mt-5 font-semibold text-center">
        transaksi sedang di proses
      </p>
      <p className="text-center text-xs mt-2">
        invoice telah di kirimkan ke email kamu, sambil nunggu undangan mu jadi yuk baca-baca artikel yang sudah eunoya siapkan untuk bekal pernikahan kamu
      </p>
      <Link href={'/'} className="buttons mt-5 w-full">
        <CustomButton>Home</CustomButton>
      </Link>
    </div>
  );
};

export default Sucess;
