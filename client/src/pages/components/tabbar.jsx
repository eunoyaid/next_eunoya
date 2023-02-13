import Image from "next/image";
import Link from "next/link";
import icHome from "/public/icons/icHome.svg";
import icBlog from "/public/icons/icBlog.svg";
import icProduct from "/public/icons/icProduct.svg";
import icChat from "/public/icons/icChat.svg";
import ReactWhatsapp from "react-whatsapp";

const Tabbar = () => {
  return (
    <div className="w-[80%]  py-3 px-5 boder bg-white mx-auto  border-gray-200 rounded-xl shadow-lg  flex md:hidden gap-2 justify-between fixed z-10  bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <Link href="/" className="icon">
        <Image src={icHome} className="w-6 h-6" alt="icon" />
      </Link>

      <Link href="products" className="icon">
        <Image src={icProduct} className="w-6 h-6" alt="icon" />
      </Link>
      <Link href="blogs" className="icon">
        <Image src={icBlog} className="w-6 h-6" alt="icon" />
      </Link>
      <Link href="" className="icon">
        <ReactWhatsapp number="+628882063144" message="hallo eunoya, saya ingin konsultasi desain nih ">
          <Image src={icChat} className="w-6 h-6" alt="icon" />
        </ReactWhatsapp>
      </Link>
    </div>
  );
};

export default Tabbar;
