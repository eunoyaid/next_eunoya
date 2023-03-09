import { Facebook, Instagram } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { TbBrandTiktok } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="mt-20 mb-10 ">
      <div className="flex items-center justify-center gap-4">
        <span className="text-xs pr-5 border-r  border-gray-500 text-gray-500  sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://eunoya.id/" className="hover:underline">
            Eunoya
          </a>
        </span>
        <div className="flex items-center justify-center gap-x-3">
          <p className="text-xs text-gray-500">see us on :</p>
          <div className="flex  space-x-3 justify-center items-center mt-0">
            <Link href="https://instagram.com">
              {" "}
              <Instagram className="text-gray-500 w-5 h-5 hover:text-primary transition" />{" "}
            </Link>
            <Link href="https://instagram.com">
              {" "}
              <Facebook className="text-gray-500 w-5 h-5 hover:text-primary transition" />{" "}
            </Link>
            <Link href="https://instagram.com">
              {" "}
              <TbBrandTiktok className="text-gray-500 w-5 h-5 hover:text-primary transition" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
