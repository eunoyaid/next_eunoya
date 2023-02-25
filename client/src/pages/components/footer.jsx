import { Facebook, Instagram } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TbBrandTiktok } from 'react-icons/tb';
import icBrandLg from "/public/icons/icBrandLg.svg";

const Footer = () => {
  return (

<footer className="w-[80%] mx-auto rounded-xl mb-10  p-4 bg-white border border-gray-100 sm:p-6 dark:bg-gray-900">
  
          <div className="sm:flex sm:items-center sm:justify-between">
          <Image src={icBrandLg} alt={'brand-eunoya'} className='w-32' />
        <span className="text-xs text-gray-500  sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Eunoya</a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
           <Link href='https://instagram.com'> <Instagram className='icons' /> </Link>
           <Link href='https://instagram.com'> <Facebook className='icons' /> </Link>
           <Link href='https://instagram.com'> <TbBrandTiktok className='icons' /> </Link>
           
        </div>
    </div>
</footer>

  )
}

export default Footer