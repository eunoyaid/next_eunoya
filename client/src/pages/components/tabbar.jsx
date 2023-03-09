import {useState, useEffect} from 'react'
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
import { Bag, Home, Messages3, TableDocument } from "iconsax-react";

const Tabbar = () => {
 
  return (
    <div  className={`w-[90%] flex md:hidden  items-center  py-3 px-5 border bg-white mx-auto  border-gray-200 rounded-xl shadow-lg   gap-2 justify-between fixed z-10  bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}>
      <Link href="/" className="icon">
        {/* <Image src={icHome} className="w-6 h-6" alt="icon" /> */}
        <Home className='icons' />
      </Link>

      <Link href="/products" className="icon">
        {/* <Image src={icProduct} className="w-6 h-6" alt="icon" /> */}
        <Bag className='icons' />
        
      </Link>
      <Link href="/blogs" className="icon">
        {/* <Image src={icBlog} className="w-6 h-6" alt="icon" /> */}
        <TableDocument className='icons' />
      </Link>
  
        <ReactWhatsapp number="+628882063144" message="hallo eunoya, saya ingin konsultasi desain nih ">
          {/* <Image src={icChat} className="w-6 h-6" alt="icon" /> */}
          <Messages3 className='icons' />
        </ReactWhatsapp>
  
    </div>
  );
};

export default Tabbar;
